const initialState = {
  reviews: [],
  currentActivity: '',
  error: ''
}

export default function reviewReducer(state = initialState, action) {
  switch(action.type){
    case 'FETCHING_REVIEWS':
      return {
        ...state,
        currentActivity: 'Fetching reviews from server'
      }

    case 'SOURCE_REVIEWS':
      return {
        ...state,
        reviews: action.payload,
        currentActivity: ''
      }

    default:
      return state
  }
}