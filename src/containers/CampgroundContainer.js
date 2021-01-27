import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampgrounds} from '../redux/actions/campgroundActions';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar'
import CampIntro from '../components/campground-finder/CampIntro';
import {Container} from 'semantic-ui-react';
import {List} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';

class CampgroundContainer extends Component {

  componentDidMount() {
    this.props.fetchCampgrounds()
  }

  render() {
    return (
        <div className='campgrounds'>
        <NavBar />
          <h1> CampGrounds </h1>
        <CampIntro />
      <br />
      <Container width="550px">
        <div className='display-campgrounds'>
          <List link>
            
          {this.props.camp.campgrounds.map(campground => {
              
              return (
                <Segment raised >
                <div className='campground-link' key={campground.id}>
                  <h2><NavLink to={`/campgrounds/${campground.id}`}>{campground.name}</NavLink></h2>
                  
                    <List.Item>{campground.description}</List.Item>
                  
                </div>
                </Segment> 
              )
            })} 
            
            </List>
        </div>
      </Container>
      <br />
      <Container>
        <div className="more-info">
            <p>More campgrounds coming soon....</p>
        </div>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    camp: state.camp
  })
}

export default connect(mapStateToProps, { fetchCampgrounds })(CampgroundContainer);