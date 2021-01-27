// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import ReviewContainer from '../../containers/ReviewContainer.js';
// import NavBar from 'components/NavBar';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import NavBar from '../NavBar.js';

const Campground = ({ match }) => {
  
  const { campgroundId } = match.params
  
  const singleCamp = parseInt(campgroundId)
  
  const camps = useSelector(state => state.camp.campgrounds[singleCamp] )
  debugger
 
  if(!camps) {
    return(
      <div>
      <NavBar />
      
      <Container>
        <p>
          That campground is not here yet! Please check back at a later time!</p>
      </Container>
      </div>
    )
  }

  return (
    <div>
      <NavBar />
    
      <Container>
      
        <h2 id="camp-name">{camps.name}</h2>
        <image>{camps.image_url}</image>
        <p className="camp-description">{camps.description}</p>
        <p>Average Score: {camps.avg_score}</p>
        <p>Price per night: {camps.price}</p>
        <p>Hiking Trails: {camps.hiking}</p>
        <p>Tent Camping: {camps.tent}</p>
        <p>Can you use hammocks? {camps.hammocks}</p>
        <p>RV Camping Spots: {camps.rv}</p>

        
       <ReviewContainer campgroundId={campgroundId} />
      </Container>
    </div>
   
  )
}

export default Campground;