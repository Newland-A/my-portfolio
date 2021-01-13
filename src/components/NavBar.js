inport React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className=''>Home</NavLink>
      <NavLink to='/blogs' className=''>Blog</NavLink>
      <NavLink to='/campground' className=''>CampGround Finder</NavLink>
    </div>
  )
}

export default NavBar