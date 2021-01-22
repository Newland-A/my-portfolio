import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampgrounds} from '../redux/actions/campgroundActions';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar'
import CampIntro from '../components/campground-finder/CampIntro';

class CampgroundContainer extends Component {

  componentDidMount() {
    this.props.fetchCampgrounds()
  }

  render() {
    return (
        <div className='campgrounds'>
        <NavBar />
          <h2> CampGrounds </h2>
        <CampIntro />
      
      <section className='campground-body'>
        <div className='display-campgrounds'>
          <ul className='camp-properties'>
            
          {this.props.camp.campgrounds.map(campground => {
              
              return (
                
                <div className='campground-link' key={campground.id}>
                  <NavLink to={`/campgrounds/${campground.id}`}>{campground.name}</NavLink>
                  <li>{campground.description}</li>
                  
                </div>
              )
            })} 
            </ul>
        </div>
      </section>
      <section>
        <div className="more-info">
            <p>More campgrounds coming soon....</p>
        </div>
      </section>
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