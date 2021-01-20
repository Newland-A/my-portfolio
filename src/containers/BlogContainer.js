import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../redux/actions/blogActions';
import { NavLink } from 'react-router-dom'

class BlogContainer extends Component {
 
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
        
          <div className='blog'>
            <h2><a href='/blog'>Blog...</a></h2>
            <div className='blog-intro'>
              <p>
                Among the Components for my portfolio, I was required to write several blogs as a requirement for graduation at <a rel='noopener noreferrer' href="https://flatironschool.com" target="_blank">Flatiron School</a>. Post graduation my Blogs will be featured here. I will attempt to continue to add to my personal blogs here, in respect of my potential employer.
              </p>
            </div>
          
        
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
          <ul>
            <h2>Things I'd Like To Achieve</h2>
            <p>My graduation day will be Feb. 11th. Afterwards, I will be continueing to grow my knowledge.</p>
            <li>Dive in understanding  <strong>AWS/ NODE.js / .NET /</strong> </li>
            <li>I am excited to continue deeping my knowledge of Rails and JavaScript.</li>
            <li>I look forward to building on to each of my projects. With new features</li>
          </ul>
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