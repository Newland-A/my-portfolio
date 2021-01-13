export const fetchPosts = () => {
  return dispatch => {
    dispatch({type: 'FETCHING_POSTS'})
    fetch('http://192.168.1.11:3001/posts')
    .then(resp => resp.json())
    .then(posts => {
      dispatch({
        type: 'SOURCE_POSTS',
        payload: posts.sort((a, b) => {
          let aDate = new Date(a.created_at)
          let bDate = new Date(b.created_at)
          return bDate - aDate
        })
      })
    })
  }
}