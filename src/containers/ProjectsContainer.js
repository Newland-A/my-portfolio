import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects} from '../redux/actions/campgroundActions';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar'
import TechSkills from '../components/technical-porjects/TechSkills';
import CampIntro from '../components/campground-finder/CampIntro';
import {Container} from 'semantic-ui-react';
import {List} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';

class ProjectsContainer extends Component {

  render() {
    return (
      <div>

        <NavBar />
        <Container>
          <h1>Projects</h1>
        <TechSkills />
        </Container>
      </div>
    );
  }
}

export default ProjectsContainer;