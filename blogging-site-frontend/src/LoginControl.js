import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false, username: "Jaska"}
  }

  handleLoginClick(event) {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick(event) {
    this.setState({isLoggedIn: false})
  }

  handleRegisterClick(event) {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let comp = null
      if (!isLoggedIn) {
        comp = 
          <div class="usernav-container">
            <span class="myLink" onClick={this.handleLoginClick.bind(this)}>Login</span> / <span class="myLink" onClick={this.handleRegisterClick.bind(this)}>Register</span>
          </div>
      } else {
        comp = 
          <div class="usernav-container">
            <span onClick={this.handleLogoutClick.bind(this)} class="myLink">{this.state.username}</span>
          </div>
      }

    return (
      <div class="usernav">
        {comp}
      </div>
    )
  }
}

export default LoginControl
