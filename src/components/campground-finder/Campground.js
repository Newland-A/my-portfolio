// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import ReviewContainer from '../../containers/ReviewContainer.js'

const Campground = ({ match }) => {
  debugger
  const { campgroundId } = match.params
  debugger
  const singleCamp = parseInt(campgroundId)
  debugger
  const camps = useSelector(state => state.campgrounds[singleCamp])
  debugger
  // useEffect(() => {
  //   document.name = camps.name;
  //   document.description = camps.description;
  // })

  if(!camps) {
    return(
      <section>
        <p>
          That campground is not here yet! Please check back at a later time!</p>
      </section>
    )
  }

  return (
    <section>
      <div className="campground">
        <h2 id="camp-name">{camps.name}</h2>
        <p className="camp-description">{camps.description}</p>
        <p></p>
      </div>
      {/* <ReviewContainer campgroundId={this.state.campgroundId} /> */}
    </section>
  )
}

export default Campground;