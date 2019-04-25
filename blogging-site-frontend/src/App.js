import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginControl from './LoginControl';
import Navbar from './Navbar';
import Content from './Content';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div class="background">
        <Navbar/>
        <Router>
          <Switch>
            <Route path="/login" component={LoginControl} />
            <Route path="/" render={(props) => <Content src="http://localhost:8080/posts/" {...props} />} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
