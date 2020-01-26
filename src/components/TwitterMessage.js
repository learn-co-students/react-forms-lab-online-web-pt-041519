import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "some message"};
  }

  handleMessageChange = event => {
    this.setState({message: event.target.value})
  }

  handleCharCount = () => (this.props.maxChars - this.state.message.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p> Num of Characters remaingin:  {this.props.maxChars - this.state.message.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;