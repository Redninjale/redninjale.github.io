import React from 'react'
import './Work.css'

function Work() {
  return (
    <div className='WorkContainer'>
        <div className='WorkGrid'>
            <Card name="NASA" description="Working"/>
        </div>
    </div>
  )
}

function Card(prop) {
    return (
      <div className='CardContainer'>
          {/* <img src="" alt="" /> */}
          <h1>{prop.name ? prop.name : "Project Name"}</h1>
          <span>{prop.description ? prop.description : "Description"}</span>
      </div>
    )
}

export default Work