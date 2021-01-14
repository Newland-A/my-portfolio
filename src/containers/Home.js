import React, { Component } from 'react';
import AboutMe from '../components/header/AboutMe';
import Myname from '../components/header/Myname';
// import Title from '../components/blogs/Title';
// import Description from '../components/blogs/Description';
import CampTitle from '../components/campground-finder/CampTitle';
import CampDescription from '../components/campground-finder/CampDescription';
import BlogContainer from './BlogContainer.js'
export default class Home extends Component {
  render() {
    return (
      <div className='Home'>

        <section className='headline'>
          <Myname />
          <AboutMe />
        </section>
        <section className='projects-blogs'>
          <div className='project blog'>
            {/* <h2><NavLink to='/blog'>Blog</NavLink></h2> */}
            {/* Blog Component */}
            {/* <Title />
            <Description /> */}
            <BlogContainer />
            {/* insert a link to your blogs */}
          </div>
        </section>

        <section className="project-campgrounds">
          <CampTitle />
          <CampDescription />
          {/* Figure out how to display from the back end each campground */}
          {/* Also figure out a way to use the API from NPS */}
        </section>
      </div>

    );
  }
}
