import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: 280,
      message: ""
    };
  }

  handleChange = event => {
    let input = event.target.value
    this.setState({
        maxChars: 280 - input.length,
        message: input
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={event => {this.handleChange(event)}}
        />
        <p>Message output: {this.state.message}</p>
        <p>Chars left: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
