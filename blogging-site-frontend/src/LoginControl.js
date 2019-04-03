import React, { Component } from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick(event) {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick(event) {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let comp = null
      if (!isLoggedIn) {
        /*comp = <Button text='Login' onClick={this.handleLoginClick.bind(this)}/>*/
      } else {
        /*comp = <Button text='Logout' onClick={this.handleLogoutClick.bind(this)}/>*/
      }

    return (
      <div>
        
        {comp}
      </div>
    )
  }
}

export default LoginControl;