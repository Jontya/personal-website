import React from 'react'
import "../Styles/Navbar.css";
import logo from "../Images/logo.png"
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src={logo} alt="logo"/>
        <div className='name-container'>
            <p className='title-name'>Jonty Atkinson</p>
            <p className='title-undertext'>Personal Portfolio</p>
        </div>
        <div className='toggle-button'>
            
        </div>
        <div className='links'>
            <Link to="/" className='hover-animation'>Home</Link>
            <Link to="/projects" className='hover-animation'>Projects</Link>
            <Link to="/resume" className='hover-animation'>Resume</Link>
        </div>
    </div>
  )
}

export default Navbar