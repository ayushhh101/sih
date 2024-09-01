import React, { useRef } from 'react';
import '../componentscss/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuRef = useRef();

  const openSidebar = () => {
    if (menuRef.current) {
      menuRef.current.style.display = 'flex';
    } else {
      console.error('Sidebar element not found.');
    }
  };

  const closeSidebar = () => {
    if (menuRef.current) {
      menuRef.current.style.display = 'none';
    } else {
      console.error('Sidebar element not found.');
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">
            <img src="Ayushlogo.png" className="object-fit-fill border rounded" />
          </h1>
          <div className="navbar-links">
            <ul className="navbar-menu">
              <li className="navbar-item"><a href="#home">Home</a></li>
              <li className="navbar-item"><a href="#plants">Plants</a></li>
              <li className="navbar-item"><a href="#about">About</a></li>
              <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-hamburger">
              <Link className="nav-link" to="#">
                <i className="fa-solid fa-bars" style={{ height: '10px', width: '100%' }} onClick={openSidebar}></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidebar" ref={menuRef}>
        <li>
          <Link to="#">
            <i className="fa-solid fa-x" onClick={closeSidebar} style={{ height: '10px', width: '100%' }}></i>
          </Link>
        </li>
        <li><Link to="/hy">Hysteria</Link></li>
        <li><Link to="/co">Colosseum</Link></li>
        <li><Link to="/co">Teknack</Link></li>
        <li><Link to="/eve">Events</Link></li>
        <li><Link to="/clu">Clubs</Link></li>
        <li><Link to="/st">Student Chapters</Link></li>
        <li><Link to="/gal">Gallery</Link></li>
      </ul>
    </>
  );
};

export default Navbar;
