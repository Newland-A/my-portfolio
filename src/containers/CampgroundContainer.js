import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCampgrounds} from '../redux/actions/campgroundActions';
import { NavLink } from 'react-router-dom';

class CampgroundContainer extends Component {

  componentDidMount() {
    this.props.fetchCampgrounds()
  }

  render() {
    // debugger
    return (
        
        <div className='campgrounds'>
          <h2> CampGrounds </h2>
          <div className='campground-intro'>
            <p>
            In my free time, I enjoy spending time with my family. Away from technology to reset my brain and connect with my loved ones. If your looking for a place to go maybe you would enjoy one of these places to spend time with your loved ones! 
            </p>
          </div>
        
      
      <section className='campground-body'>
        <div className='display-campgrounds'>
          <ul className='camp-properties'>
            
            
          {this.props.camp.campgrounds?.map(campground => {
              {/* debugger */}
              return (
                
                <div className='campground-link' key={campground.id}>
                  <NavLink to={`/campgrounds/${campground.id}`}>{campground.name}</NavLink>
                  {/* {/* <li>{campground.img_url}</li>
                  <li>{campground.avg_score}</li> */}
                  <li>{campground.description}</li>
                  {/* <li>{campground.hiking}</li>
                  <li>{campground.tent}</li>
                  <li>{campground.rv}</li>
                  <li>{campground.hammocks}</li>
                  <li>{campground.price}</li> */} 
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