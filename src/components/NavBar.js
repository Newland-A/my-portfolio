inport React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className=''>1</NavLink>
      <NavLink to='/' className=''>2</NavLink>
      <NavLink to='/' className=''>3</NavLink>
    </div>
  )
}

export default NavBar