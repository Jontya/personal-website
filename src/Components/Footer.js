import React from 'react';
import "../Styles/Footer.css";
import logo from "../Images/logo.png";
import { IconContext } from 'react-icons';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-contacts'>
      <IconContext.Provider value ={{size: "2em", }}>
        <ul className='footer-list'>
            <li className='footer-item'><a href="mailto:jontyatkinson2002@gmail.com"> <FaEnvelope/> Email</a></li>
            <li className='footer-item'><a href="https://www.linkedin.com/in/jonty-atkinson/"><FaLinkedin/> LinkedIn</a></li>
            <li className='footer-item'><a href="https://github.com/Jontya"><FaGithub/> GitHub</a></li>
          </ul>
      </IconContext.Provider>
      </div>

    </div>
  )
}

export default Footer
