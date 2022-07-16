import React from 'react'
import "../Styles/Navbar.css";
import logo from "../Images/smallLogo.png"
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src={logo} alt="logo"/>
        <div className='toggle-button'>
            
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
        </div>
    </div>
  )
}

export default Navbar