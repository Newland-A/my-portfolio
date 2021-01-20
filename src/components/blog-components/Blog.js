import React, { useState, useEffect } from 'react';
import CommentContainer from '../../containers/CommentContainer';
import { useSelector } from 'react-redux';

 const Blog = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
    )

  useEffect(() => {
    document.title = post.tile;
    document.content = post.content;
  })

  if (!post) {
    return(
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  return (
    <section>
    {/* // <div className="blog-container">
    //     <div className="blog-content"> */}
      <article className="post">
          <h2 id="blog-title">{post.title}</h2>
          {/* <div id="blog-body">{post.content}</div> */}
          <p className="blog-content">{post.content}</p>
        {/* // </div> */}
        
      {/* // </div> */}
      </article>
      <CommentContainer postId={this.state.postId} />
    </section>
  )
}

export default Blog;

// import React, { Component } from 'react';
// import CommentContainer from '../../containers/CommentContainer';

// export default class Blog extends Component {
//   // const { blogId } = match.params

//   state = {
//     postId: parseInt(document.location.href.match(/\d+/g)),
//     post: {}
//   }

//   componentDidMount() {
//     fetch(`http://localhost:3000/posts/${this.state.postId}`)
//     .then(resp => resp.json())
//     .then(post => this.setState({
//       ...this.state,
//       post: post
//     }))
//   }

//   componentDidUpdate(){

//     document.getElementById('blog-title').innerHTML = this.state.post.title
//     document.getElementById('blog-body').innerHTML = this.state.post.content
//   }

//   render() {
//     return (
//       <div className="blog-container">
//         <div className="blog-content">
//           <h2 id="blog-title">Loading Please Wait...</h2>
//           <div id="blog-body"> </div>
//         </div>
//         <CommentContainer postId={this.state.postId} />
//       </div>
//     );
//   }
// }

