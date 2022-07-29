import React from 'react';
import { IconContext } from 'react-icons'
import {FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import '../Styles/Resume.css'


function Resume() {
  return (
    <div className='resume'>
      <h1 className='resume-header'>Jonty Atkinson</h1>
      <IconContext.Provider value ={{size: "1.2em", }}>
      <p className='resume-phone'><FaPhoneAlt className='icon'/> <span className='resume-phone-icon'>(+61) 0416-690-572</span></p>
        <ul className='resume-contacts'>
          <li><a href="mailto:jontyatkinson2002@gmail.com" className='hover-animation'><FaEnvelope className='icon'/> Email</a></li>
          <li><a href="https://www.linkedin.com/in/jonty-atkinson/" className='hover-animation'><FaLinkedin className='icon'/> LinkedIn</a></li>
          <li><a href="https://github.com/Jontya" className='hover-animation'><FaGithub className='icon'/> GitHub</a></li>
        </ul>
      </IconContext.Provider>

        <div className='resume-education'>
          <h3 className='resume-title'>Education</h3>
          
          <ul className='resume-education-list'>
            <li className='resume-list-title'>University of Newcastle <span className='resume-list-sidebar'>July 2021 - Current</span></li>
            <li>Bachelor of Computer Science <span className='resume-list-sidebar'>Newcastle, NSW</span></li>
            <li>Majoring in Software Development <span className='resume-list-sidebar'>GPA - 6.1</span></li>
            <li>Placed on the College Commendation List - College of Engineering</li>
          </ul>
        </div>

        <div className='resume-coursework'>
          <h3 className='resume-title'>Relevant Coursework</h3>
          
          <ul className='resume-coursework-list'>
            <li>Data Structures</li>
            <li>Web Technologies</li>
            <li>System Design</li>
            <li>Advanced Mathematics</li>
            <li>System Analysis</li>
            <li>Database Management</li>
            <li>Operating Systems</li>
            <li>Algorithm Analysis</li>
          </ul>
        </div>

        <div className='resume-projects'>
          <h3 className='resume-title'>Projects</h3>
          
          <ul className='resume-projects-list'>
            <li className='resume-list-title'>Production Line Discrete Event Simulator <span className='resume-list-subtitle'>| Java, GitHub</span> <span className='resume-list-sidebar'>May 2022</span></li>
            <ul className='resume-list-sublist'>
              <li>Developed a program to simulate the production of widgets on a production line using discrete event simulation.</li>
              <li>The program utilises Queues and Priority Queues to store widgets in-between the various production stages.</li>
              <li>Utilises advanced Object-Oriented-Programming techniques</li>
            </ul>

            <li className='resume-list-title'>Sorting Algorithm Visualizer <span className='resume-list-subtitle'>| React, GitHub</span> <span className='resume-list-sidebar'>June 2022</span></li>
            <ul className='resume-list-sublist'>
              <li>Built a React application for visualizing various sorting algorithms.</li>
              <li>Implemented algorithms for Merge Sort, Quick Sort, Heap Sort and Bubble Sort.</li>
              <li>Provides an interactive environment to generate and sort new arrays.</li>
            </ul>

            <li className='resume-list-title'>Personal Portfolio <span className='resume-list-subtitle'>| React, GitHub</span> <span className='resume-list-sidebar'>July 2022</span></li>
            <ul className='resume-list-sublist'>
              <li>Created a personal portfolio using React to display my personal projects, resume and information about me.</li>
              <li>Utilises more advanced HTML and CSS to create a simple, good looking and effective web page.</li>
              <li>Takes advantage of various standard component library's to achieve crucial website functionality.</li>
            </ul>

            <li className='resume-list-title'>Project 3 <span className='resume-list-subtitle'>| Lang / Tech</span> <span className='resume-list-sidebar'>August 2022</span></li>
            <ul className='resume-list-sublist'>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </ul>
        </div>

        <div className='resume-skills'>
          <h3 className='resume-title'>Technical Skills</h3>

          <ul className='resume-skills-list'>
            <li><strong>Languages:</strong> Java, C++, HTML / CSS, JavaScript, LaTeX<br/></li>
            <li><strong>Developer Tools:</strong> VS Code, GitHub, IntelliJ<br/></li>
            <li><strong>Technologies / Frameworks:</strong> Linux, Node.js, React<br/></li>
          </ul>
        </div>

        <div className='resume-extracurricular'>
          <h3 className='resume-title'>Extracurricular</h3>

          <ul className='resume-extracurricular-list'>
            <li className='resume-list-title'>Robocup Junior <span className='resume-list-sidebar'>2018 - 2019</span></li>
            <ul className='resume-list-sublist'>
              <li>Competed in the Hunter Region and Central Coast regional competition at the University of Newcastle.</li>
              <li>Competed in the NSW state competition at the University of New South Wales.</li>
            </ul>

            <li className='resume-list-title'>PASS Leader <span className='resume-list-sidebar'>2022</span></li>
            <ul className='resume-list-sublist'>
              <li>Peer Assisted Study Session (PASS) Leader for a first year data structure course.</li>
              <li>Helped first year students with assignments, exam preparation and general course problems</li>
            </ul>
          </ul>
        </div>
    </div>
  )
}

export default Resume