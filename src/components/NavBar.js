import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Segment inverted centered>
        <Button basic  inverted color="black"><NavLink to='/' className=''>Home</NavLink> </Button>
   
        <Button basic  inverted color="purple"><NavLink to='/blog' className=''>Blog</NavLink> </Button>  
     
        <Button basic  inverted color="dark blue"><NavLink to='/technical-projects' className=''>Projects</NavLink></Button>
      
        <Button basic inverted color="black"><NavLink to='/campgrounds' className=''>CampGrounds</NavLink></Button>
      </Segment>
      <br /><br />
    </div>
    
  )
}

export default NavBar