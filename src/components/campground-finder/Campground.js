import React, { Component } from 'react';

class Campground extends Component {
  state = {
    postid: parseInt(document.location.href.match(/\d+/g)),
    campgrounds: {}
  }

  componentDidMount() {
    debugger
    fetch(local)
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Campground;