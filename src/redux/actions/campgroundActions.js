export const fetchCampgrounds = () => {
  return dispatch => {
    dispatch({type: 'FETCHING_CAMPS'})
    // 
    fetch('http://localhost:3000/campgrounds')
    .then(resp => resp.json())
    .then(campgrounds => {
      dispatch({
        type: 'SOURCE_CAMPS',
        payload: campgrounds.sort((a, b) => {
          let aDate = new Date(a.created_at)
          let bDate = new Date(b.created_at)
          return bDate - aDate
        })
      })
    })
    // 
  }
}
// Mapdispatch to props magically calls me
