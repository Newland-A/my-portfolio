import React, { Component } from 'react';
import AboutMe from '../components/header/AboutMe';
import Myname from '../components/header/Myname';
import {NavLink} from 'react-router-dom'
import CampDescription from '../components/campground-finder/CampDescription';
import Description from '../components/blog-components/Description'
import TechDescription from '../components/technical-porjects/TechDescription'
import NavBar from '../components/NavBar';
import { Container, Segment, Grid } from 'semantic-ui-react'
// import 
export default class Home extends Component {
  render() {
    return (
      <div>
      
      <NavBar />
      <Grid columns='equal'>
       
        <Grid.Column floated="left">
          <Segment raised>
            <Container className="home_intro">
              <Myname />
              <AboutMe />
            </Container>

            <Container className="projects_home">
              <h2><NavLink to='technical-projects'>Projects</NavLink></h2>
                <TechDescription />
            </Container>
              
            <Container className="campgrounds_home">
              <h2><NavLink to='/campgrounds'>Campgrounds</NavLink></h2>
              <CampDescription />
            </Container>
          </Segment>
        </Grid.Column>

        <Grid.Column floated='right' width={5}>
          <Container className="blogs_home">
              <Segment raised className="blogs_home">
                <h2><NavLink to='/blog'>Blog</NavLink></h2>
                <Description />
              </Segment>
          </Container>
        </Grid.Column>
      </Grid>
      </div>

    );
  }
}
