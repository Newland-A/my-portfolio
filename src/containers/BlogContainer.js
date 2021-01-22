import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../redux/actions/blogActions';
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'
import BlogIntro from '../components/blog-components/BlogIntro';
import MyTodos from '../components/blog-components/MyTodos';
class BlogContainer extends Component {
 
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    
    return (
          
          <div className='blog'>
          <NavBar />
            <h2><a href='/blog'>Blog</a></h2>
          <BlogIntro />
          
        <section className='blog-titles'>
          <div>
              <ul>
                <h2>Posts:</h2>
                
                {this.props.blog.posts.map(post => {
                  
                  return (

                    <div className='blog-link' key={post.id}>
                      <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink> 
                        <li>{post.created_at.slice(0,10)}:<br /></li>  
                    </div>
                  )
                })}
              </ul>
            </div>
        </section>
        <section className='goals-todo'>
          <MyTodos />
        </section>
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