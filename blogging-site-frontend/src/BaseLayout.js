import React, { Component } from 'react';
import './BaseLayout.css';
import LoginControl from './LoginControl';
import Navbar from './Navbar';
import Content from './Content';

class BaseLayout extends Component {

  render() {
    return (
      <div class="background">
        <div class="container">
          <Navbar/>
          <LoginControl/>
          <Content src="http://localhost:8080"/>
        </div>
      </div>
    )
  }
}

export default BaseLayout
