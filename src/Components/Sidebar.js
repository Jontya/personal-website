import React from 'react'
import "../Styles/Sidebar.css"
import logo from "../Images/logo.png"
import { IconContext } from 'react-icons'
import {FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img className="sidebar-logo" src={logo} alt="logo"/>
        <h3>Jonty Atkinson</h3>
        <p>
            Studying Computer Science<br/> at the University of Newcastle
        </p>
        <IconContext.Provider value ={{size: "1.2em", }}>
            <ul className='sidebar-list'>
                <li className='sidebar-item'><FaMapMarkerAlt className='icon'/> Newcastle, Australia</li>
                <li className='sidebar-item'><FaEnvelope className='icon'/> <a href="mailto:jontyatkinson2002@gmail.com">Email</a></li>
                <li className='sidebar-item'><FaLinkedin className='icon'/> <a href="https://www.linkedin.com/in/jonty-atkinson/">LinkedIn</a></li>
                <li className='sidebar-item'><FaGithub className='icon'/> <a href="https://github.com/Jontya">GitHub</a></li>
            </ul>
        </IconContext.Provider>
    </div>
  )
}

export default Sidebar