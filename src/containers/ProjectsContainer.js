import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects} from '../redux/actions/campgroundActions';
import { NavLink } from 'react-router-dom';
import TechSkills from '../components/technical-porjects/TechSkills';
import {Container} from 'semantic-ui-react';
import {List} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';

class ProjectsContainer extends Component {

  render() {
    return (
      <div>

        
        <Container>
          <h1>Projects</h1>
          <Segment>
            <TechSkills />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default ProjectsContainer;