import React from 'react'
import '../componentscss/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Virtual Garden</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#plants">Plants</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar