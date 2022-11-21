import React from 'react'
import "../Styles/Sidebar.css"
import logo from "../Images/logo.png"
import { IconContext } from 'react-icons'
import {FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='sticky'>
                <img className="sidebar-logo" src={logo} alt="logo"/>
                <h3 className='sidebar-head'>Jonty Atkinson</h3>
                <p>
                    Studying Computer Science<br/> at the University of Newcastle
                </p>
                <IconContext.Provider value ={{size: "1.2em", }}>
                    <ul className='sidebar-list'>
                        <li className='sidebar-item'>
                            <FaMapMarkerAlt className='icon'/> Newcastle, Australia
                        </li>
                        <li className='sidebar-item'>
                            <a href="mailto:jontyatkinson2002@gmail.com" target="_blank" rel="noreferrer">
                            <FaEnvelope className='icon'/> 
                            <span className='icon-spacing'>Email</span></a>

                        </li>
                        <li className='sidebar-item'>
                            <a href="https://www.linkedin.com/in/jonty-akinson/" target="_blank" rel="noreferrer">
                            <FaLinkedin className='icon'/>
                            <span className='icon-spacing'>LinkedIn</span></a>

                        </li>
                        <li className='sidebar-item'>
                            <a href="https://github.com/Jontya" target="_blank" rel="noreferrer">
                            <FaGithub className='icon'/> 
                            <span className='icon-spacing'>GitHub</span></a>
                        </li>
                    </ul>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Sidebar
