import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {content: '', author: props.author, date: '', title: ''}
    this.baseState = this.state
  }

  handleChange(event) {
    if (event.target.id === "title")
      this.setState({title: event.target.value})
    else if (event.target.id === "message")
    this.setState({content: event.target.value})
  }

  handleSubmit() {
    let date = this.createCurrentDate()
    this.props.onClick(this.state.author, this.state.content, date, this.state.title)
    this.setState(this.baseState)
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
      <div class="">
        <textarea id='title' value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <textarea id='message' value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>Post</button>
      </div>
    )
  }
}

export default Message
