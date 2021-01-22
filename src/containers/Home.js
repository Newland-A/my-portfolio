import React, { Component } from 'react';
import AboutMe from '../components/header/AboutMe';
import Myname from '../components/header/Myname';
import {NavLink} from 'react-router-dom'
import CampDescription from '../components/campground-finder/CampDescription';
import Description from '../components/blog-components/Description'
import TechSkills from '../components/technical-porjects/TechSkills';
import NavBar from '../components/NavBar';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
      <NavBar />
        <section className='headline'>
          <Myname />
          <AboutMe />
        </section>

        <section className='projects-blogs'>
          <div className='project blog'>
            <h2><NavLink to='/blog'>Blog</NavLink></h2>
            <Description />
          </div>
        </section>

        <section className="tech-propjects">
        <h2><NavLink to='technical-projects'>Projects</NavLink></h2>
          <TechSkills />
        </section>

        <section className="project-campgrounds">
          <h2><NavLink to='/campgrounds'>Campgrounds</NavLink></h2>
          <CampDescription />
        </section>
      </div>

    );
  }
}
