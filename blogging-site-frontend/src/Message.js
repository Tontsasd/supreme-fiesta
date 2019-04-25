import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {content: '', author: '', date: '', title: ''}
    this.baseState = this.state
  }

  handleChange(event) {
    if (event.target.id === "title")
      this.setState({title: event.target.value})
    else if (event.target.id === "message")
      this.setState({content: event.target.value})
    else if (event.target.id === 'author')
      this.setState({author: event.target.value})
  }

  handleSubmit() {
    if (this.state.content !== '' && this.state.title !== '' && this.state.author !== '') {
      let date = this.createCurrentDate()
      this.fetchAddPost(this.state.author, this.state.content, date, this.state.title)
      this.setState(this.baseState)
    } else if (this.state.content === '') {
      alert('Your message field is empty, please provide a message before submitting.')
    } else if (this.state.title === '') {
      alert('Title must contain at least 1 character.')
    } else if (this.state.author === '') {
      alert('Author must contain at least 1 character.')
    }
  }

  fetchAddPost(a, c, d, t) {
    var data = {author: a, content: c, date: d, title: t}
    fetch('http://localhost:8080/posts/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((resp) => resp.json()).catch(error => console.error('Error:', error)).then(response => {
      this.props.history.push('/')
    })
  }
    
  createCurrentDate() {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    var hours = new Date().getHours()
    var min = new Date().getMinutes()
    var sec = new Date().getSeconds()

    if (date < 10)
      date = '0' + date

    if (month < 10)
      month = '0' + month

    if (hours < 10)
      hours = '0' + hours

    if (min < 10)
      min = '0' + min

    if (sec < 10)
      sec = '0' + sec

    var fullDate = year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec

    return fullDate
  }

  render() {
    return (
      <div class="my-message">
        <textarea id='title' value={this.state.title} onChange={this.handleChange.bind(this)} placeholder="Title"/>
        <br/>
        <textarea id='message' value={this.state.content} onChange={this.handleChange.bind(this)} placeholder="Message"/>
        <br/>
        <textarea id='author' value={this.state.author} onChange={this.handleChange.bind(this)} placeholder="Author"/>
        <br/>
        <button class="myButton" onClick={this.handleSubmit.bind(this)}>Publish</button>
      </div>
    )
  }
}

export default withRouter(Message)
