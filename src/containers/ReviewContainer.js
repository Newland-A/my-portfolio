import React, { Component } from 'react';
import Review from '../components/campground-finder/Review';
import { Feed } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react';
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
      
        <div className="new-reviews">
        <Form>
          {/* <form id="new-review-form" onSubmit={e => this.handleSubmit(e)}> */}

            {/* <input 
              type="text" 
              placeholder="Title" 
              onChange={e => this.handleTitleChange(e)} value={this.props.title} /><br />*/}
              <Form.Field label='An HTML <textarea>' control='textarea' rows='6' />
            {/*<textarea 
              onChange={e => this.handleDescriptionChange(e)}
              value={this.props.description} placeholder="Enter Review" /><br />*/}
              <Form.Field label='An HTML <button>' control='button'>
      Submit
    </Form.Field>
            {/*<input type="submit" value="Submit" /> */}
          {/* </form> */}
          </Form>
       
        {this.state.reviews.map(review => <Review name={review.title} description={review.description} score={review.score} id={review.id} created_at={review.created_at} />)}
      </div>
    );
  }
}

export default ReviewContainer;