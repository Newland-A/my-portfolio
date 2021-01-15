import React, { Component } from 'react';
import Comment from '../components/blog-components/Comment';
// parent to comment
class CommentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      content: '',
      postId: this.props.postId,
      comments: [],
    }
  }

  componentDidMount() {
    this.fetchComments()
  }

  fetchComments = () => {
    fetch('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(comments => this.setState({
      ...this.state,
      comments: comments.filter(comment => comment.post_id === this.state.postId),
    }))
  }

  sendComment = () => {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: {
          name: this.state.name,
          content: this.state.content,
          post_id: this.state.postId
        }
      })
    })
  }

  
  handleContentChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.name.length > 2 && this.state.content.length > 3) {
      const commentInfo = {
        name: this.state.name,
        content: this.state.content,
        postId: this.state.postId
      }
      this.setState({
        ...this.state,
        name: '',
        content: '',
        comments: [...this.state.comments, commentInfo]
      })
      this.pushComment()
      let form = document.getElementById('new-comment-form')
      form.reset()
    }
  }

  render() {
    return (
      <div className="comments-wrapper">
        <div className="new-comments">
          <form id="new-comment-form" onSubmit={e => this.handleSubmit(e)}>
            <input type="text" placeholder="Name" onChange={e => this.handleNameChange(e)} value={this.props.name} /><br />
            <textarea 
            onChange={e => this.handleContentChange(e)} 
            value={this.props.content} placeholder="Enter Comment" /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="comments-wrapper">
          {this.state.comments.map(comment => <Comment name={comment.name} content={comment.content} created_at={comment.created_at} id={comment.id} />)}
        </div>
      </div>
    );
  }
}

export default CommentContainer;