import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div id='Home' className='HomeContainer'>
      <div className="HomeBackground"></div>
      <div className="HomeBackgroundOverlay"></div>
      <div className='HomeContent'>
        <img className='HomeImage' src="./portrait_2.jpg" alt="Not Working" />
        <h1 className='HomeName'>Cameron Le</h1>
        <h1 className='HomeList'>Aspiring: Software Developer | Data Analyst | Sunset Watcher</h1>
        <div className='HomeLM'><a href='#HomeRead'>Learn More</a></div>
      </div>
    </div>
  )
}

export default Home