import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { tweet: "" }
  }

  handleChange = (e) => {
    this.setState({ tweet: e.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange={this.handleChange} 
        value={this.state.tweet} />
        <p>Characters left: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
