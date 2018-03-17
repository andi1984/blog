import { h, render } from "preact";
import { default as comments } from "./comments";
import Spotify from "./components/Spotify";
comments();

render(<Spotify />, document.querySelector('[data-js="spotify-play"]'));
