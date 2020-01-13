import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "erin",
      currentRemaining: 276
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value,
      currentRemaining: this.showRemainingCharacters(event)
    })
  }

  showRemainingCharacters = (event) => {
    return this.props.maxChars - event.target.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p>{this.state.currentRemaining}</p>
        <p>{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
