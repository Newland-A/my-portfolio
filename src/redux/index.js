import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import blog from './reducers/blogReducer';
import camp from './reducers/campgroundReducer';

const rootReducer = combineReducers({
  blog,
  camp
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))