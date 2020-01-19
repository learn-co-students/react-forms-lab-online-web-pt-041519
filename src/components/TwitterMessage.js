import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      maxChars: this.props.maxChars
    };
  }

  updateChars = (e) => {
    const newChars = 280 - e.target.value.length
    this.setState({
      input: e.target.value,
      maxChars: newChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateChars} type="text" name="message" id="message" value={this.state.input} />
    <h3>{this.state.maxChars} left</h3>
      </div>
    );
  }
}

export default TwitterMessage;
