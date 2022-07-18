import React from 'react'
import Sidebar from '../Components/Sidebar.js'
import "../Styles/Home.css"

function Home() {
  return (
    <div className="home">
        <div className='home-sidebar'>
          <Sidebar />
        </div>
        <div className='home-about'>

        </div>
    </div>
  )
}

export default Home