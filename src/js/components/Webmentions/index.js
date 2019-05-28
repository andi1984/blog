import { h, Component } from "preact";
import { asyncGetMentionsForUrl } from "../../helper/webmentions";

export default class WebMentions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentions: []
    };
  }

  componentDidMount() {
    asyncGetMentionsForUrl(encodeURIComponent(this.props.target)).then(
      mentions => {
        this.setState({ mentions });
      }
    );
  }

  render(props, state) {
    return (
      <div>
        {state.mentions.map(mention => (
          <div>My mention</div>
        ))}
      </div>
    );
  }
}
