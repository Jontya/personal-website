import React from 'react'
import '../Styles/Projects.css'

function Projects() {
  return (
      <div className='project-container'>
        <div className='project-block'>
          <span className='project-heading'>Sorting Algorithm Visualizer</span>
          <p className='project-desc'>
            Description
          </p>
          <button className='project-git-button'>GitHub Repo</button>
          <button className='project-try-button'>Try It Out</button>
        </div>

        <div className='project-block'>
          <span className='project-heading'>Production Line Discrete Event Simulator</span>
          <p className='project-desc'>
            Description
          </p>
          <button className='project-git-button'>GitHub Repo</button>
          <button className='project-try-button'>Try It Out</button>
        </div>

        <div className='project-block'>
          <span className='project-heading'>Program Planner</span>
          <p className='project-desc'>
            Description
          </p>
          <button className='project-git-button'>GitHub Repo</button>
          <button className='project-try-button'>Try It Out</button>
        </div>

        <div className='project-block'>
          <span className='project-heading'>Scheduling Algorithm Simulator</span>
          <p className='project-desc'>
            Description
          </p>
          <button className='project-git-button'>GitHub Repo</button>
          <button className='project-try-button'>Try It Out</button>
        </div>
      </div>
    );
}

export default Projects
