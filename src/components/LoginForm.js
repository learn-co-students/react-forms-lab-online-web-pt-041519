import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }
  }

  updateState = (e) => {
    const key = e.target.name
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  render() {
    return (
      <form  onSubmit={event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input onChange={this.updateState} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.updateState} id="password" name="password" type="password" value={this.state.password} />
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
