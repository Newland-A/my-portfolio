import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>

        <section className='headline'>
        <h1>my name is <strong>Amy Newland</strong></h1>
        <p className="subtitle">I am a full stack software engineer, who enjoys solving problems and designing a visually pleasing web application.</p>
        </section>

        <section className='projects'>
          <div className='project blog'>
            <h2><NavLink to='/blog'>Blog</NavLink></h2>
            <p>Explain what your blog is</p>
            {/* insert a link to your blogs */}
          </div>
        </section>

        <section>
          <h2>Campground Finder</h2>
          <p></p>
        </section>
      </div>

    );
  }
}


