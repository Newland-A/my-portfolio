import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import BlogContainer from './containers/BlogContainer';
import Blog from './components/blog-components/Blog'

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='main-content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/blog/:id' component={Blog} />
        </div>
      </div>
    </Router>
  );
}

export default App;
