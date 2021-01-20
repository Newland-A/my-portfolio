import React, { Component } from 'react';
import Review from '../components/campground-finder/Review';
class ReviewContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      score: '',
      campgroundId: this.props.campgroundId,
      reviews: [],
    }
  }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews = () => {
    fetch('http://localhost:3000/reviews')
    .then(resp => resp.json())
    .then(reviews => this.setState({
      ...this.state,
      reviews: reviews.filter(review => review.campground_id === this.state.campgroundId),
    }))
  }
sendReview = () => {
  fetch('http://localhost:3000/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      review: {
        title: this.state.title,
        description: this.state.description,
        score: this.state.score,
        campground_id: this.state.campgroundId

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
    return (
      <div className="reviews-wrapper">
        <div className="new-reviews">
          <form id="new-review-form" onSubmit={e => this.handleSubmit(e)}>
            <input 
              type="text" 
              placeholder="Title" 
              onChange={e => this.handleTitleChange(e)} value={this.props.title} /><br />
            <textarea 
              onChange={e => this.handleDescriptionChange(e)}
              value={this.props.description} placeholder="Enter Review" /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        {this.state.reviews.map(review => <Review name={review.title} description={review.description} score={review.score} id={review.id} created_at={review.created_at} />)}
      </div>
    );
  }
}

export default ReviewContainer;