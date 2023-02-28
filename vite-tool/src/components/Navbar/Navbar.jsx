import React from 'react'
import './Navbar.css'
import ihLogo from '../../images/ironhack-logo-xs.png'
import menuLogo from '../../images/menu-top-xs.png'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
      <li><img src={ihLogo} /></li>
      <li><img src={menuLogo} /></li>
      </ul>
    </nav>
  )
}

export default Navbar