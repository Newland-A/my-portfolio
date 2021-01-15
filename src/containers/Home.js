import React, { Component } from 'react';
import AboutMe from '../components/header/AboutMe';
import Myname from '../components/header/Myname';
import {NavLink} from 'react-router-dom'
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
            <h2><NavLink to='/blog'>Blog</NavLink></h2>
            {/* Blog Component */}
            <p>
                Among the Components for my portfolio, I was required to write several blogs as a requirement for graduation at <a rel='noopener noreferrer' href="https://flatironschool.com" target="_blank">Flatiron School</a>. Post graduation my Blogs will be featured here. I will attempt to continue to add to my personal blogs here, in respect of my potential employer.
              </p>
            {/* <Title />
            <Description /> */}
            {/* <BlogContainer /> */}
            {/* insert a link to your blogs */}
          </div>
        </section>
        <section className="tech-propjects">
          <div className="technical-project">
            <h2>Technical Skills:</h2>
            <p>
              Ruby, Rails, MySql, Postgresql, JavaScript, React, OAuth, Git, Github, Bootstrap, Materialize, Semantic UI, Object-Oriented Programming (OOP), Behavior-Driven Development (BDD), Test-Driven Development (TDD), CRUD, HTML, CSS, JSON Web Tokens (JWT) and local storage, Devise, MVC backend structure, Adobe InDesign, Adobe Photoshop, Adobe Illustrator, Adobe Imageready, Adobe Flash, Adobe Dreamweaver, Microsoft Suite
            </p>
            <h2>Design Skills:</h2>
            <p>
            Bootstrap, Materialize, Semantic UI,
            Drawing, Typography I & II, Design and Color Theory, Comprehensive Illustration, Electronic Drawing I & II, History of Graphic Design, Desktop Publishing, Electronic Layout and Design, Design and Presentation Development, Advertising and Art Portfolio, Multimedia and Animation I & II, Business Communications I & II
            </p>
            {/* TechnicalProjects Container */}
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
