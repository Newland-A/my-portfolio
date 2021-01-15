import React, { useEffect } from 'react';
import CommentContainer from '../../containers/CommentContainer';
import { useSelector } from 'react-redux';

export const Blog2 = ({ match }) => {
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
          <h2 id="blog-title"></h2>
          {/* <div id="blog-body">{post.content}</div> */}
          <p className="blog-content"></p>
        {/* // </div> */}
        
      {/* // </div> */}
      </article>
      <CommentContainer postId={this.state.postId} />
    </section>
  )
}