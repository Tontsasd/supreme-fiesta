import React, { Component } from 'react';
import './BaseLayout.css';
import LoginControl from './LoginControl';
import Navbar from './Navbar';

class BaseLayout extends Component {

  render() {
    return (
      <div class="background">
        <div class="container">
          <Navbar/>
          <LoginControl/>
          <div class="content">
          </div>
        </div>
      </div>
    )
  }
}

export default BaseLayout
