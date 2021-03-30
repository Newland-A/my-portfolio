import React, { Component } from 'react';
import Review from '../components/campground-finder/Review';
// import {connect} from 'react-redux';
// import { fetchReviews } from '../redux/actions/reviewActions';

import { Feed } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react';
class ReviewContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      score: '',
      campground_id: this.props.campgroundId,
      reviews: [],
    }
  }

  componentDidMount() {
    this.props.fetchReviews()
  }

  fetchReviews = () => {
    fetch('http://newland-portfolio.herokuapp.com/reviews')
    .then(resp => resp.json())
    .then(reviews => this.setState({
      ...this.state,
      reviews: reviews.filter(review => review.campground_id === this.state.campgroundId),
    }))
  }
sendReview = () => {
  fetch('http://newland-portfolio.herokuapp.com/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      review: {
        title: this.state.title,
        description: this.state.description,
        score: this.state.score,
        campgroundId: this.state.campgroundId

      }
    })
  })
}

handleTitleChange = e => {
  e.preventDefault()
  this.setState({
    ...this.state,
    name: e.target.value
  })
}
handleDescriptionChange = e => {
  e.preventDefault()
  this.setState({
    ...this.state,
    description: e.target.value
  })
}

handleSubmit = e => {
  if(this.state.title.length > 2 && this.state.description.length > 5) {
    const reviewInfo = {
      title: this.state.title,
      description: this.state.description,
      score: this.state.score,
      campgroundId: this.state.campgroundId
    }
    this.setState({
      ...this.state,
      title: '',
      description: '',
      score: '',
      reviews: [...this.state.reviews, reviewInfo]
    })
    this.pushReview()
    let form = document.getElementById('new-review-form')
    form.reset()
  }
}

  render() {
  debugger
    return (
      <div>
        <div className="new-reviews">
          <form id="new-review-form">
            <input type="text" placeholder="Title Review"
            value={this.props.title} />
            <textarea value={this.props.description}
            placeholder="Please leave a Review!" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
            {this.state.reviews.map(review => <Review title={review.title} description={review.description} created_at={review.created_at}
            id={review.id} key={review.campground_id}
            /> )}
        </div>
      </div>
      
    );
  }
}

// const mapStateToProps = state => {
//   return({
//     review: state.review
//   })
// }
// export default connect(mapStateToProps, {fetchReviews})(ReviewContainer);
export default ReviewContainer;