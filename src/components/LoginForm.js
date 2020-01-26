import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: "", password: ""};
  }

  // handleInputChange = event => {
  //   this.setState({event.target.name: event.target.value})}

    handleUsernameChange = event => {
      this.setState({username: event.target.value})
    }

    handlePasswordChange = event => {
      this.setState({password: event.target.value})
    }

  handleSubmit = event => {
    event.preventDefault()
    if (event.target.username.value !== "" || event.target.password.value !== "") {
      let formData = { username: event.target.username.value, password: event.target.password.value }
      this.sendFormData(formData)
    } 
  }

  sendFormData = formData => {
    this.props.handleLogin(formData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
