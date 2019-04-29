import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Content from './Content';
import Message from './Message';
import EditPost from './EditPost';
import SearchResults from './SearchResults';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {keyword: ''}
    this.baseState = this.state
  }

  handleChange(event) {
    this.setState({keyword: event.target.value})
  }

  onClick(event) {
    this.setState(this.baseState)
  }

  render() {
    return (
      <div className="App">
        <div class="background">
        <Router>
          <div class="mynav">
            <div class="mynav-container">
              <div class="my-link">
                <a class="home-link" href="/">Home</a>
                <a href="/newpost">New post</a>
              </div>
              <div class="searchbar">
                <input class="myInput" type="text" value={this.state.keyword} onChange={this.handleChange.bind(this)} placeholder="Search"/>
                <Link to={{
                  pathname: "/search",
                  state: {keyword: this.state.keyword}
                  }}>
                  <button class="myButton" onClick={this.onClick.bind(this)}>Search</button>
                </Link>
              </div>
            </div>
          </div>
          
            <Switch>
              <Route path="/newpost" render={(props) => <Message {...props}/>}/>
              <Route path="/editpost" render={(props) => <EditPost {...props}/>}/>
              <Route path="/search" render={(props) => <SearchResults src="http://localhost:8080/posts/search/" {...props}/>}/>
              <Route exact path="/" render={(props) => <Content src="http://localhost:8080/posts/" {...props} />}/>
              <Route exact path="/:page" render={(props) => <Content src="http://localhost:8080/posts/" {...props} />}/>
            </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
