import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Content from './Content';
import Message from './Message';
import EditPost from './EditPost';

class App extends Component {

  onClickButton(e) {
    console.log(e.currentTarget.value);
  }

  render() {
    return (
      <div className="App">
        <div class="background">
        <Router>
          <div class="mynav">
            <div class="mynav-container">
              <div class="my-link">
                <Link class="home-link" to="/">Home</Link>
                <Link to="/newpost">New post</Link>
              </div>
              <div class="searchbar">
                <input class="myInput" type="text" placeholder="Search"/>
                <button onClick={this.onClickButton.bind(this)} class="myButton">Search</button>
              </div>
            </div>
          </div>
          
            <Switch>
              <Route exact path="/" render={(props) => <Content src="http://localhost:8080/posts/" {...props} />} />
              <Route path="/newpost" render={(props) => <Message {...props}/>}/>
              <Route path="/editpost" render={(props) => <EditPost {...props}/>}/>
            </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
