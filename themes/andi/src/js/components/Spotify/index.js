import { h, Component, render } from "preact";
import {
  isAuthorized,
  authorizeForPlay,
  startPlayList
} from "../../helper/spotify";
export default class Spotify extends Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
  }

  play() {
    if (isAuthorized()) {
      // Play the playlist
      startPlayList(this.props.uri);
    } else {
      // Init authorize process and rerun play in sucess case
      authorizeForPlay(this.play.bind(this));
    }
  }

  render({}) {
    return (
      <button type="button" onClick={this.play} title="Play mood music on Spotify!">
        🎵 (🔥 Play with Spotify 🔥)
      </button>
    );
  }
}
