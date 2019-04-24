import React, { Component } from 'react';
import Message from './Message';

class Content extends Component {
  constructor(props) {
    super(props)
    let postData = {id: '', author: '', content: '', date: '', title: ''}
    this.state = {'postData': [postData]}
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
      
      let stateObj = {'postData': rows}
      this.setState(stateObj)
    })
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
      const myDate = response.date

      var d = myDate.split(/[- :]/)
      var theDate = d[2] + '.' + d[1] + '.' + d[0] + ' ' + d[3] + ':' + d[4]

      var postData = {id: response.id, author: response.author, content: response.content, date: theDate, title: response.title}

        let tmp = this.state.postData
        tmp.push(postData)
        this.setState(tmp)
      })
  }

  render() {
    return (
      <div class="my-container">
            {this.state.postData.map(e => (
              <div class="my-content" key={e.id}>
                <h1>{e.title}</h1>
                <p class="date-content">{e.date}</p>

                <p class="content-content">{e.content}</p>

                <p class="author-content">{e.author}</p>
              </div>
            ))}
            <Message onClick={this.fetchAddPost.bind(this)} author='jaska'/>
      </div>
    )
  }
}

export default Content
