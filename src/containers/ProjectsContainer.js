import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TechSkills from '../components/technical-porjects/TechSkills';
import {Container} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import TechProjects from '../components/technical-components/TechProjects';

class ProjectsContainer extends Component {

  render() {
    return (
      <div>

        
        <Container>
          <h1>Projects</h1>
          <Segment>
            <TechSkills />
          </Segment>
          <Segment>
            <TechProjects />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default ProjectsContainer;