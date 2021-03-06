import React, { Component } from 'react';
import Comment from '../components/blog-components/Comment';
import {connect} from 'react-redux';
import {fetchComments} from '../redux/actions/commentActions';

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


  sendComment = () => {
    fetch('http://newland-portfolio.herokuapp.com/comments', {
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

  handleNameChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      name: e.target.value
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
          {this.props.state.comments.map(comment => <Comment name={comment.name} content={comment.content} created_at={comment.created_at} id={comment.id} />)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return({
    comments: state.comment
  })
}
export default connect(mapStateToProps, {fetchComments})(CommentContainer);