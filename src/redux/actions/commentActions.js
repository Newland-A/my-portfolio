export const fetchComments = () => {
  debugger
  return dispatch => {
    dispatch({type: 'FETCHING_COMMENTS'})
    fetch('http://amy-newland-portfolio-backend.herokuapp.com:3000/comments')
    .then(resp => resp.json())
    .then(comments => {
      dispatch({
        type: 'SOURCE_COMMENTS',
        payload: comments.sort((a, b) => {
          let aDate = new Date(a.created_at)
          let bDate = new Date(b.created_at)
          return bDate - aDate
        })
      })
    })
    // 
  }
}