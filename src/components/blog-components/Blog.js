import React, {  useEffect } from 'react';
import CommentContainer from '../../containers/CommentContainer';
import { useSelector } from 'react-redux';

 const Blog = ({ match }) => {
  const { postId } = match.params

  const singlePost = parseInt(postId)

  const post = useSelector(state =>
    state.posts(singlePost)
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
      <article className="post">
          <h1><a href='/blog'>Blog</a></h1>
          <h2 id="blog-title">{post.title}</h2>
    
          <p className="blog-content">{post.content}</p>
  
      </article>
      {/* <CommentContainer postId={this.state.postId} /> */}
    </section>
  )
}

export default Blog;



