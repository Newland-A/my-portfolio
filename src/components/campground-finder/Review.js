import React from 'react';

const Review = props => {

  return (
    <div className="review" key={props.id}>
      {typeof(props.created_at) !== 'undefined' ? <sub>{props.created_at.slice(0, 10)} - {props.title}</sub> : <sub>Now - {props.title}</sub>}
      <p>{props.description}</p>
    </div>
  );

}

export default Review;