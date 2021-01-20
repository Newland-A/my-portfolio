const initialState = {
  campgrounds: [],
  currentActivity: '',
  error: ''
}

export default function campgroundReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCHING_CAMPGROUNDS':
      return {
        ...state,
        currentActivity: 'Fetching campgrounds from server'
      }

    case 'SOURCE_CAMPGROUNDS':
      return {
        ...state,
        campgrounds: action.payload,
        currentActivity: ''
      }

    default:
      return state
  }
}