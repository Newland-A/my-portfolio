import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import blog from './reducers/blogReducer';
import camp from './reducers/campgroundReducer';
import comment from './reducers/commentReducer';
import review from './reducers/reviewReducer';

const rootReducer = combineReducers({
  blog,
  camp,
  comment,
  review,
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))