import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../redux/actions/blogActions';
import { NavLink } from 'react-router-dom'
import BlogIntro from '../components/blog-components/BlogIntro';
import MyTodos from '../components/blog-components/MyTodos';
import { List } from 'semantic-ui-react';
import { Container, Segment } from 'semantic-ui-react';
class BlogContainer extends Component {
 
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (  
        <div className='blog'>
         
          <BlogIntro />
          <br/>
          <Container>
          <div>
              <List link>
                <h2>Posts:</h2>
                
                {this.props.blog.posts.map(post => {
                 
                  return (
                    
                    <Segment raised >
                    <div className='blog-link' key={post.id}>
                      
                      <h3><NavLink to={`/blog/${post.id}`}>{post.title}</NavLink> </h3>

                        <List.Item >{post.created_at.slice(0,10)}:<br /></List.Item>  
                    </div>
                    </Segment>
                  )
                })}
              </List>
            </div>
        </Container>
        <br />
        <Container >
          <MyTodos />
        </Container>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    blog: state.blog
  })
}

export default connect(mapStateToProps, { fetchPosts })(BlogContainer);