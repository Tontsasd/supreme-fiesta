import React, { Component } from 'react';
import './BaseLayout.css';
import LoginControl from './LoginControl';
import Navbar from './Navbar';
import Content from './Content';

class BaseLayout extends Component {

  render() {
    return (
      <div class="background">
        <Navbar/>
        <LoginControl/>
        <div class="my-container">
          <Content src="http://localhost:8080/posts/"/>
        </div>
      </div>
    )
  }
}

export default BaseLayout
