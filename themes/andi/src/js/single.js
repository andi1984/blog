import { h, render } from "preact";
import { default as comments } from "./comments";
import Spotify from "./components/Spotify";
comments();

const spotifyPlayButton = document.querySelector('[data-js="spotify-play"]');
if (spotifyPlayButton) {
  render(
    <Spotify uri={spotifyPlayButton.getAttribute("data-spotify")} />,
    spotifyPlayButton
  );
}
