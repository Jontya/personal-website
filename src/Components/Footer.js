import React from 'react';
import "../Styles/Footer.css";
import { IconContext } from 'react-icons';
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-contacts'>
                    <IconContext.Provider value ={{size: "1.2em"}}>
                        <ul className='footer-list'>
                            <li><span className='footer-list-text'>CONTACT ME:</span></li>
                            <li className='footer-item'>
                                <a href="mailto:jontyatkinson2002@gmail.com" className='hover-animation'> 
                                <FaEnvelope className='icon'/> 
                                <span className='icon-spacing'>EMAIL</span></a>

                            </li>

                            <li className='footer-item'><a href="https://www.linkedin.com/in/jonty-atkinson/" className='hover-animation'>
                                <FaLinkedin className='icon'/> 
                                <span className='icon-spacing'>LINKEDIN</span></a>
                            </li>
                            <li className='footer-item'><a href="https://github.com/Jontya" className='hover-animation'>
                                <FaGithub className='icon'/> 
                                <span className='icon-spacing'>GITHUB</span></a>
                            </li>
                        </ul>
                    </IconContext.Provider>
                </div>

                <div className='footer-stamp'>
                    <p>&copy; 2022 Jonty Atkinson</p>
                </div>
            </div>
        </div>
    );
}

export default Footer
