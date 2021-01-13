import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import blog from './reducers/blogReducer';

const rootReducer = combineReducers({
  blog
})

export default createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))