import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReviewContainer from '../../containers/ReviewContainer.js'

const Campground = ({ match }) => {
  
  const { campgroundId } = match.params

  const campground = useSelector(state => state.campgrounds.find(campground => campground.id === campgroundId))
  
  useEffect(() => {
    document.name = campground.name;
    document.description = campground.description;
  })

  if(!campground) {
    return(
      <section>
        <p>That campground is not here yet! Please check back at a later time!</p>
      </section>
    )
  }

  return (
    <section>
      <div className="campground">
        <h2 id="camp-name">{campground.name}</h2>
        <p className="camp-description">{campground.description}</p>
      </div>
      <ReviewContainer campgroundId={this.state.campgroundId} />
    </section>
  )
}

export default Campground;