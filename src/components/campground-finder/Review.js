import React from 'react';
import { useSelector } from 'react-redux';
const Review = (props) => {

//   const { campgroundId } = match.params
// debugger
//   const singleReviews = parseInt(campgroundId)
//   debugger
//   const reviews = useSelector(state => state.reviews[singleReviews])
// debugger
  return (
    // <div>
    //   <p>
    //     {reviews.title}
    //   </p>
    // </div>
    <div className="review" key={props.id}>
      {typeof(props.created_at) !== 'undefined' ? <sub>{props.created_at.slice(0, 10)} - {props.title}</sub> : <sub>Now - {props.title}</sub>}
      <p>{props.description}</p>
    </div>
  );

}

export default Review;