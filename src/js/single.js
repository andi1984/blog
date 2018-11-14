import { h, render } from "preact";
import Spotify from "./components/Spotify";

const spotifyPlayButton = document.querySelector('[data-js="spotify-play"]');
if (spotifyPlayButton) {
  render(
    <Spotify uri={spotifyPlayButton.getAttribute("data-spotify")} />,
    spotifyPlayButton
  );
}
