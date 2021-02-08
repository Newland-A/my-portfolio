// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Segment,  List } from 'semantic-ui-react';

const Campground = ({ match }) => {
  
  const { campgroundId } = match.params
  
  const singleCamp = parseInt(campgroundId)
  
  const camps = useSelector(state => state.camp.campgrounds[singleCamp] )
 
  if(!camps) {
    return(
      <div>
      
      <Container>
        <p>
          That campground is not here yet! Please check back at a later time!
        </p>
      </Container>
      </div>
    )
  }

  return (
    <div>
      
      <Container>
          <Segment raised>
          <h2 id="camp-name">{camps.name}</h2>
          <p>{camps.image_url}</p>
          <p className="camp-description">{camps.description}</p>
          <p>Average Score: {camps.avg_score}</p>
          <p>Price per night: {camps.price}</p>
          <p>Hiking Trails: {camps.hiking}</p>
          <p>Tent Camping: {camps.tent}</p>
          <p>Can you use hammocks? {camps.hammocks}</p>
          <p>RV Camping Spots: {camps.rv}</p>
          {/* <p>{camps.reviews}</p> */}
        </Segment>
        
        {/* <Segment>
          <ReviewContainer campgroundId={campgroundId} />
       </Segment> */}
      </Container>
      <Container>
        <List>
          <p>Reviews: </p>
          {camps.reviews.map(review => {
            return (
              <Segment raised >
              <List.Item>Title: {review.title}
              </List.Item>
              <List.Item> Content: {review.description}
              </List.Item>
              <List.Item>Camps Score: {review.score}
              </List.Item>
              </Segment>
            )
          })}
        </List>
      </Container>
      <br /><br />
    </div>
   
  )
}

export default Campground;