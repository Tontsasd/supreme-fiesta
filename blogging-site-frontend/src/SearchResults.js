import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import ShowMore from 'react-show-more';

class SearchResults extends Component {
  constructor(props) {
    super(props)
    let postData = {id: '', author: '', content: '', date: '', title: ''}
    this.state = {'postData': [postData], currentPage: 1, postsPerPage: 5, keyword: this.props.location.state.keyword, update: this.props.location.state.update}
  }

  componentDidMount() {
    this.fetchPosts()
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  componentDidUpdate(a) {
    if (a.location.state.update)
      this.setState({keyword: a.location.state.keyword})
  }

  fetchPosts() {
    let url = this.props.src + this.state.keyword
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

export default withRouter(SearchResults)
