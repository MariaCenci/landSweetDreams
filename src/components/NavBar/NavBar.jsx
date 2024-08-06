import React from 'react'
import  {Link}  from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
            SweetDreams
            </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
