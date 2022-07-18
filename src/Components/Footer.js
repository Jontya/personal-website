import React from 'react';
import "../Styles/Footer.css";
import logo from "../Images/logo.png";
import { IconContext } from 'react-icons';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-contacts'>
        <IconContext.Provider value ={{size: "1.2em"}}>
          <ul className='footer-list'>
            <li>CONTACT ME:</li>
            <li className='footer-item'><a href="mailto:jontyatkinson2002@gmail.com"> <FaEnvelope className='icon'/> EMAIL</a></li>
            <li className='footer-item'><a href="https://www.linkedin.com/in/jonty-atkinson/"><FaLinkedin className='icon'/> LINKEDIN</a></li>
            <li className='footer-item'><a href="https://github.com/Jontya"><FaGithub className='icon'/> GITHUB</a></li>
          </ul>
        </IconContext.Provider>
        </div>
        <div className='footer-stamp'>
          <p>&copy; 2022 Jonty Atkinson</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
