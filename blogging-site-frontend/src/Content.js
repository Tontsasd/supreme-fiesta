import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import ShowMore from 'react-show-more';

class Content extends Component {
  constructor(props) {
    super(props)
    let postData = {id: '', author: '', content: '', date: '', title: ''}
    if (props.match.params.page)
      this.state = {'postData': [postData], currentPage: props.match.params.page, postsPerPage: 5}
    else
    this.state = {'postData': [postData], currentPage: 1, postsPerPage: 5}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.fetchAllPosts()
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
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

  fetchDeletePost(event) {
    fetch(this.props.src + event.target.id, {
      method: 'DELETE'
    }).then(resp => {
          this.fetchAllPosts()
    })
  }

  onEditClick(event) {
    var c = ''
    var t = ''

    this.state.postData.forEach(element => {
      if (element.id == event.target.id) {
        c = element.content
        t = element.title
      }
    })

    this.props.history.push({pathname: '/editpost', state: {id: event.target.id, content: c, title: t, currentPage: this.state.currentPage}})
  }

  render() {
    const { postData, currentPage, postsPerPage } = this.state

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost)

    const renderPosts = currentPosts.map((post) => {
      return (<div class="my-content" key={post.id} id={post.id}>
      <h1>{post.title}</h1>
      <p class="date-content">{post.date}</p>

      <p class="content-content">
        <ShowMore
          lines={4}
          more='Show more'
          less='Show less'
          anchorClass=''
        >
          {post.content}
        </ShowMore>
      </p>

      <p class="author-content">{post.author}</p>
      
      <div class="content-buttons">
        <button id={post.id} class="myButton" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button id={post.id} class="myDeleteButton" onClick={this.fetchDeletePost.bind(this)}>Delete</button>
      </div>
    </div>)
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(postData.length / postsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers =
        <Fragment>
          <nav>
            <ul class="pagination">
              {pageNumbers.map(number => (
                <li class="page-item">
                  <a class={(this.state.currentPage == number ? 'active page-link': 'page-link')} href={number} id={number} onClick={this.handleClick}>{number}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Fragment>

    return (
      <div class="my-container">
        {renderPosts}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}

export default withRouter(Content)
