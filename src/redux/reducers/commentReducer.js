const initialState = {
  comments: [],
  currentActivity: '',
  error: ''
}

export default function commentReducer(state = initialState, action) {
  switch(action.type){
    case 'FETCHING_COMMENTS':
      return {
        ...state,
        currentActivity: 'Fetching comments from server'
      }

    case 'SOURCE_COMMENTS':
      return {
        ...state,
        comments: action.payload,
        currentActivity: ''
      }

    default:
      return state
  }
}