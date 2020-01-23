import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  characterCount = () => {
    return <div>
      {this.props.maxChars - this.state.message.length}
    </div>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        {this.characterCount()}
      </div>
    );
      
  }
}

export default TwitterMessage;
