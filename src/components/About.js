import React from 'react'
import "./About.css"
import { Tab } from '@mui/material'

function About() {
  return (
    <div className='AboutContainer' id="AboutMe">
        <h1>About Me</h1>
        <div className='AboutSection'>
            <div className='AboutLeft'>
                <img src="portrait_2.jpg" alt="" />
            </div>
            <div className='AboutRight'>
                <p>Howdy! I'm a Freshman at Texas A&M University as a General Engineering student. 
                    I plan on pursuing a Computer Engineering (B.S.). I love to create and design
                    using code. I am also an avid in-door rock climber.
                </p>
                <p>
                    The industries that I have learned from include Software Engineering,
                     Data Science, and Embedded Systems. I actively participated in robotics in all 4 years
                     of high school. At A&M, I am in organizations like Aggie Coding Club and
                      Aggie Data Science club to collaborate and push for an environment that 
                      pushes to excel.
                </p>
                <span className='AboutProjects'>
                    <p>The projects this semester that I am working on are: </p> 
                    <ul>
                        <li>
                            American Airlines: Analyzing and developing a machine learning model to predict the 
                            amount of bags on a flight using American Airline's 2019 data. <br/> <b>Skills: python | sklearn | pandas</b> 
                        </li>

                        <li>
                            Revtube: Designing a local Aggie version of Youtube to address the most recent tiktok bans
                             on campus. <br/> <b>Skills: Svelte | Chakra-ui | JS | HTML | CSS | Figma</b>
                        </li>
                    </ul>
                </span>
                <p className='AboutSkills'>
                    <b>Learning: React | Svelte | ML | chakra-ui | Javascript</b>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About