import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Home from './containers/Home';
import BlogContainer from './containers/BlogContainer';
import Blog from './components/blog-components/Blog';
import CampgroundContainer from './containers/CampgroundContainer';
import Campground from './components/campground-finder/Campground';
import ProjectsContainer from './containers/ProjectsContainer';
import NavBar from './components/NavBar';


function App() {
  return (
   
    <Router>
    <NavBar />
      <Switch>
      
        <div className='App'>
          <div className='main-content'>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog' component={BlogContainer} />
            <Route exact path='/blog/:postId' component={Blog} />
            <Route exact path='/technical-components' component={ProjectsContainer}/>
            <Route exact path='/technical-projects/:projectId' />
            <Route exact path='/campgrounds' component={CampgroundContainer} />
            <Route exact path='/campgrounds/:campgroundId' component={Campground} />
        
          </div>
        </div>
      </Switch>
    </Router>
   
  );
}

export default App;
