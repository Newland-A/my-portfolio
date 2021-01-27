import React from 'react';
import CommentContainer from '../../containers/CommentContainer';
import { useSelector } from 'react-redux';
import {Container, Segment} from 'semantic-ui-react';
import NavBar from '../NavBar';
import { Feed } from 'semantic-ui-react'

 const Blog = ({ match }) => {

  const { postId } = match.params

  const singlePost = parseInt(postId)

  const posts = useSelector(state => state.blog.posts[singlePost])



  if (!posts) {
    return(
      <div>
        <NavBar />
        <Container>
          <h2>Post not found!</h2>
        </Container>
      </div>
    )
  }
  return (
    <div>
      <NavBar />
      
      <Container>
        <Segment raised >

            <h1><a href='/blog'>Blog</a></h1>
            <h2 id="blog-title">{posts.title}</h2>
            <div className="blog-content">
              <p className="blog-content">{posts.content}</p>
            </div>

            <br />
        
        </Segment>
      </Container>
      <br /><br />
      <Container>
        <Segment raised>
        <p>Please leave Comments, Suggestions, Advice and Encouraging Criticism Welcomed!</p>
          <CommentContainer postId={postId} />
        </Segment>
      </Container>
    </div>
  )
}

export default Blog;



