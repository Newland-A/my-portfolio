export const fetchCampgrounds = () => {
  return dispatch => { 
    dispatch({type: 'FETCHING_CAMPGROUNDS'})
  fetch('http://localhost:3000/campgrounds')
  .then(resp => resp.json())
  .then(campgrounds => {
    dispatch({
      type: 'SOURCE_CAMPGROUNDS', 
      payload: campgrounds.sort((a, b) => {
        let aScore = a.avg_score
        let bScore = b.avg_score

        return aScore - bScore
      })
    })
  })
}
}