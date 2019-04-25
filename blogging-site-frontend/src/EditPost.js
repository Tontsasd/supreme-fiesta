import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props)
    this.baseState = this.state
    this.state = {content: this.props.location.state.content, title: this.props.location.state.title, id: this.props.location.state.id}
    //this.baseState = this.state
  }

  handleChange(event) {
    if (event.target.id === "title")
      this.setState({title: event.target.value})
    else if (event.target.id === "message")
      this.setState({content: event.target.value})
  }

  handleSubmit() {
    if (this.state.content !== '' && this.state.title !== '' && this.state.author !== '') {
      this.fetchEditPost(this.state.author, this.state.content, this.state.title, this.state.id)
      this.setState(this.baseState)
    } else if (this.state.content === '') {
      alert('Your message field is empty, please provide a message before submitting.')
    } else if (this.state.title === '') {
      alert('Title must contain at least 1 character.')
    }
  }

  fetchEditPost(a, c, t, i) {
    var data = {author: a, content: c, title: t}
    fetch('http://localhost:8080/posts/' + i + '/edit', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((resp) => resp.json()).catch(error => console.error('Error:', error)).then(response => {
      this.props.history.push('/')
    })
  }
    
  render() {
    return (
      <div class="my-message">
        <textarea id='title' value={this.state.title} onChange={this.handleChange.bind(this)} placeholder="Title"/>
        <br/>
        <textarea id='message' value={this.state.content} onChange={this.handleChange.bind(this)} placeholder="Message"/>
        <br/>
        <button class="myButton" onClick={this.handleSubmit.bind(this)}>Publish</button>
      </div>
    )
  }
}

export default withRouter(EditPost)
