import React from 'react'
import "../Styles/Navbar.css";
import logo from "../Images/logo.png"
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img className="navbar-logo" src={logo} alt="logo"/>
          <div className='name-container'>
              <p className='title-name'>Jonty Atkinson</p>
              <p className='title-undertext'>Personal Portfolio</p>
          </div>
        </div>
        <div className='links'>
            <Link to="/" className='hover-animation'>Home</Link>
            <Link to="/projects" className='hover-animation'>Projects</Link>
            <Link to="/resume" className='hover-animation'>Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar