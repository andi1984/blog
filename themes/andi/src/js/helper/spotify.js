import { CLIENT_ID, API_ENDPOINT } from "../spotify-key";
export const SPOTIFY_CODE_FEILD = "spotifyTokenData";
export const SPOTIFY_REDIRECT_URI = `${
  window.location.origin
}/spotify-redirect.html`;

/**
 * Get the current active Spotify API access token
 */
export const getAccessToken = () =>
  JSON.parse(window.sessionStorage.getItem(SPOTIFY_CODE_FEILD))["access_token"];

/**
 * Get the refresh token got from the first /swap call.
 */
export const getRefreshToken = () =>
  JSON.parse(window.sessionStorage.getItem(SPOTIFY_CODE_FEILD))[
    "refresh_token"
  ];
/**
 * Return true if user is authorized, false otherwise.
 */
export const isAuthorized = () =>
  window.sessionStorage.hasOwnProperty(SPOTIFY_CODE_FEILD);

/**
 * Store spotify token data on client side
 * @param {Object} data
 */
const storeSpotifyTokenData = data =>
  window.sessionStorage.setItem(SPOTIFY_CODE_FEILD, JSON.stringify(data));

/**
 * Authorize the user for playing songs.
 *
 * 1. Do a call against Spotifiy /authorize endpoint inside a popup
 * 2. Do another call through our internal Node based API endpoint
 * 3. Store access data in sessionStorage of user
 * 4. Run the optional callback
 * @param {function} callback
 */
export const authorizeForPlay = callback => {
  const SCOPES = "user-modify-playback-state";
  const URL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${SPOTIFY_REDIRECT_URI}`;

  // Open authorize URL in popup
  const popup = window.open(URL, "SPOTIFY_AUTH", "height=500,width=500");
  window.addEventListener(
    "message",
    message => {
      if (message.source === popup) {
        popup.close();
        if (message.data) {
          fetch(`${API_ENDPOINT}/swap`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `code=${message.data}`
          })
            .then(response => response.json())
            .then(data => {
              storeSpotifyTokenData(data);
              if (typeof callback === "function") {
                callback();
              }
            });
        } else {
          // Auth failed
        }
      }
    },
    false
  );
};

export const refreshAccessToken = callback => {
  fetch(`${API_ENDPOINT}/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `refresh_token=${getRefreshToken()}`
  })
    .then(response => response.json())
    .then(data => {
      storeSpotifyTokenData(data);
      if (typeof callback === "function") {
        callback();
      }
    });
};

/**
 * Start playing a playlist.
 * @param {string} uri
 */
export const startPlayList = uri => {
  if (isAuthorized()) {
    fetch("https://api.spotify.com/v1/me/player/play", {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      body: JSON.stringify({
        context_uri: uri
      }),
      method: "PUT"
    }).then(response => {
      switch (response.status) {
        case 202:
          alert("You need to have your Spotify open and running, sorry 🤷‍♂️.");
          break;
        case 401:
          const callback = startPlayList.bind(this, uri);
          if (isAuthorized()) {
            refreshAccessToken(callback);
          } else {
            authorizeForPlay(callback);
          }
          break;
        case 403:
          alert("You need to be a Spotify Premium member, sorry 😞.");
        case 404:
          alert(
            "Do you have Spotify already setup? I can not find a device/app to play with 🎵"
          );
        default:
          break;
      }
    });
  }
};
