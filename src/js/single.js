import { h, render } from "preact";
import Spotify from "./components/Spotify";
import WebMentions from "./components/Webmentions";

const spotifyPlayButton = document.querySelector('[data-js="spotify-play"]');
if (spotifyPlayButton) {
  render(
    <Spotify uri={spotifyPlayButton.getAttribute("data-spotify")} />,
    spotifyPlayButton
  );
}

const webMentions = document.querySelector('[data-js="webmentions"]');
if (webMentions) {
  render(<WebMentions target={window.location.href} />, webMentions);
}
