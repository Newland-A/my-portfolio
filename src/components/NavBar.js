import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <button><NavLink to='/' className=''>Home</NavLink> </button>
      <button><NavLink to='/blogs' className=''>Blog</NavLink> </button>
      <button><NavLink to='/technical-projects' className=''>Projects</NavLink></button>
      <button><NavLink to='/campground' className=''>CampGrounds</NavLink></button>
    </div>
  )
}

export default NavBar