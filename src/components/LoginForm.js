import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    }
    };
  
  handleInputChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
    
  }
 handleSubmit = event => {
    event.preventDefault()
   if (!this.state.username || !this.state.password) return
   this.props.handleLogin(this.state)
  }
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
           <input
              id ="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={event=>this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              type="password"
              name="password"
              
              onChange={event => this.handleInputChange(event)}
            />
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