import React, { Component } from 'react';

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
        var postData = {id: response[index].id, author: response[index].author, content: response[index].content, date:  response[index].date, title: response[index].title}
        rows.push(postData)
      }
      
      let stateObj = {'postData': rows}
      this.setState(stateObj)
    })
  }

  render() {
    return (
      <div class="my-container">
            {this.state.postData.map(e => (
              <div class="content" key={e.id}>
                <h1>{e.title}</h1>

                <p>{e.content}</p>

                <p>{e.author} - {e.date}</p>
                <th></th>
              </div>
            ))}
      </div>
    )
  }
}

export default Content
