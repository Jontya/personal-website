import React from 'react'
import '../Styles/Projects.css'
import SortingPreview from '../Images/sortingPreview.PNG'
import ProductLineSim from '../Images/productLineSim.PNG'
import SortingVisualizer from '../Projects/SortingVisualizer/SortingVisualizer'


function Projects() {
    return (
        <div className='projects'>
            <div className='project-item'>
                <img className="project-preview" src={ProductLineSim} alt="project-preview"/>
                <p className='project-title'>Production Line Discrete Event Simulator</p>
                <p className='project-description'>Project 1</p>
                <button className='project-button'>GitHub Repo</button><button className='project-button-2'>Try It Out</button>
            </div>

            <div className='project-item'>
                <img className="project-preview" src={SortingPreview} alt="sorting-preview"/>
                <p className='project-title'>Sorting Algorithm Visualizer</p>
                <p className='project-description'>Project 2</p>
                <button className='project-button'>GitHub Repo</button><button className='project-button-2'>Try It Out</button>
            </div>

            <div className='project-item'>
                <img className="project-preview" src={ProductLineSim} alt="project-preview"/>
                <p className='project-title'>Scheduling Algorithm Simulator</p>
                <p className='project-description'>Project 3</p>
                <button className='project-button'>GitHub Repo</button><button className='project-button-2'>Try It Out</button>
            </div>
        </div>
    );
}

export default Projects
