
export const fetchReviews = () => {
  debugger
  return dispatch => {
    dispatch({type: 'FETCHING_REVIEWS'})
    fetch('http://newland-portfolio.herokuapp.com/reviews')
    .then(resp => resp.json())
    .then(reviews => {
      dispatch({
        type: 'SOURCE_REVIEWS',
        payload: reviews
        // payload: reviews.sort((a, b) => {
        //   let aDate = new Date(a.created_at)
        //   let bDate = new Date(b.created_at)
        //   return bDate - aDate
        // })
      })
    })
    debugger
  }
}