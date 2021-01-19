export const fetchCampgrounds = () => {
  return dispatch => { 
    dispatch({type: 'FETCHING_POSTS'})
  fetch('http://localhost:3000/campgrounds')
  .then(resp => resp.json())
  .then(posts => {
    dispatch({
      type: 'SOURCE_POSTS', 
      payload: posts.sort((camp) => {
        
      })
    })
  })
}