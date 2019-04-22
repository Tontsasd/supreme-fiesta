import React, { Component } from 'react';

class Navbar extends Component {


  onClickButton(e) {
    console.log(e.currentTarget.value);
  }

  render() {
    return (
        <div class="mynav">
          <div class="mynav-container">
            <input class="myInput" type="text" placeholder="Search"/>
            <button onClick={this.onClickButton.bind(this)} class="myButton">Search</button>
          </div>
        </div>
    )
  }
}

export default Navbar
