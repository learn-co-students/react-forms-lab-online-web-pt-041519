import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleFormChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleFormChange(event)} value={this.state.message} type="text" name="message" id="message" />
        <strong>You have {this.props.maxChars - this.state.message.length} characters left!</strong>
      </div>
    );
  }
}

export default TwitterMessage;
