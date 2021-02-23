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

        <Button basic inverted color="dark red" href="https://github.com/Newland-A">Newland-A </Button> 

        <Button basic inverted color="dark red" href="https://www.linkedin.com/in/amy-newland-developer/">Newland-A </Button>
      </Segment>
     
      <br /><br />
    </div>
    
  )
}

export default NavBar