import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import BlogContainer from './containers/BlogContainer';
import Blog from './components/blog-components/Blog';
import CampgroundContainer from './containers/CampgroundContainer';
import Campground from './components/campground-finder/Campground';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='main-content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/blog/:id' component={Blog} />
          <Route exact path='/project'/>
          <Route exact path='/project/:id' />
          <Route exact path='/campgrounds' component={CampgroundContainer} />
          <Route exact path='/campgrounds/:campgroundId' component={Campground} />
      
        </div>
      </div>
    </Router>
  );
}

export default App;
