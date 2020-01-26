import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    // console.log(props)
    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleMessageChange(e)} />
        <span> {this.state.remainingChars} remaining</span>
      </div>
    );
  }
}

export default TwitterMessage;
