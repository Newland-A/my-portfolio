import React, { Component } from 'react';
import CommentContainer from '../../containers/CommentContainer';

export default class Blog extends Component {
  state = {
    postId: parseInt(document.location.href.match(/\d+/g)),
    post: {}
  }

  componentDidMount(){
    debugger
    fetch(`http://localhost:3000/posts/${this.state.postId}`)
    .then(resp => resp.json())
    .then(post => this.setState({
      ...this.state,
      post: post
    }))
  }

  componentDidUpdate(){
    document.getElementById('blog-title').innerHTML = this.state.post.title
    document.getElementById('blog-body').innerHTML = this.state.post.content
  }

  render() {
    return (
      <div className="blog-container">
        <div className="blog-content">
          <h2 id="blog-title">Loading Please Wait...</h2>
          <div id="blog-body"> </div>
        </div>
        <CommentContainer postId={this.state.postId} />
      </div>
    );
  }
}

