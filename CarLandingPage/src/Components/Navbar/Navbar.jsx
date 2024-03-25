import React from 'react'
import './Navbar.css'

const Navbar= () =>{
  return(
    <div className='navbar'>
        <div className='navLogo'>eVo</div>
        <ul className='navMenu'>
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='contact'>Contact</li>
        </ul>
    </div>
  )
}
export default Navbar