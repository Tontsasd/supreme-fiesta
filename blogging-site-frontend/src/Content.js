import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Content extends Component {
  constructor(props) {
    super(props)
    let postData = {id: '', author: '', content: '', date: '', title: ''}
    this.state = {'postData': [postData], inEditMode: false}
  }

  componentDidMount() {
    this.fetchAllPosts()
  }

  fetchAllPosts() {
    let url = this.props.src
    fetch(url).then((resp) => resp.json()).catch(error => console.error('Error:', error)).then(response => {
      var rows = []
      
      for (let index = 0; index < response.length; index++) {
        const myDate = response[index].date

        var d = myDate.split(/[- :]/)
        var theDate = d[2] + '.' + d[1] + '.' + d[0] + ' ' + d[3] + ':' + d[4]

        var postData = {id: response[index].id, author: response[index].author, content: response[index].content, date: theDate, title: response[index].title}
        rows.push(postData)
      }
      
      var sorted = rows.reverse()
      let stateObj = {'postData': sorted}
      this.setState(stateObj)
    })
  }

  fetchOnePost(id) {

  }

  fetchDeletePost(event) {
    fetch(this.props.src + event.target.id, {
      method: 'DELETE'
    }).then(resp => {
          this.fetchAllPosts()
    })
  }

  onEditClick(event) {
    var x = document.getElementById(event.target.id)
    var y = x.getElementsByTagName("p")
    var z = x.getElementsByTagName("h1")
    this.props.history.push({pathname: '/editpost', state: {id: event.target.id, content: y[1].innerHTML, title: z[0].innerHTML}})
  }

  render() {
    return (
      <div class="my-container">
            {this.state.postData.map(e => (
              <div class="my-content" key={e.id} id={e.id}>
                <h1>{e.title}</h1>
                <p class="date-content">{e.date}</p>

                <p class="content-content">{e.content}</p>

                <p class="author-content">{e.author}</p>
                
                <div class="content-buttons">
                  <button id={e.id} class="myButton" onClick={this.onEditClick.bind(this)}>Edit</button>
                  <button id={e.id} class="myDeleteButton" onClick={this.fetchDeletePost.bind(this)}>Delete</button>
                </div>
              </div>
            ))}
      </div>
    )
  }
}

export default withRouter(Content)
