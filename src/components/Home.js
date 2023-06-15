import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div id='Home' className='HomeContainer'>
      <div className='HomeBody'>
        <div className='HomeNameContainer'>
          <h1 className='HomeWelcome'>Chao</h1>
          <h1 className='HomeName'>Cameron<span>Le</span></h1>
          <div>
            <img className='HomeImage' src="./portrait_3.jpg" alt="Not Working" />
          </div>
        </div>

        <div className='HomeContent'>
          <h2>Software engineer</h2>
          <h3>UI/UX, Backend, Data analytics</h3>
          <p>Howdy! I'm a <b>Computer Science student at Texas A&M University</b>. I plan on pursuing a Bachelors in Science. 
          I love to create and design using code. I am also an avid in-door rock climber and traveler.</p>
          <p>The industries that I have learned from include <b>Software Engineering</b>, Data Science, and Embedded Systems. I actively participated
           in <b>robotics</b> for all 4 years of high school. At A&M, I am in organizations like <b>Aggie Coding Club</b> and <b>Aggie Data Science club</b> to collaborate
             and push for an environment that excels.</p>
          <p id="last">My <b>future direction</b> is currently in developing myself as a <b>full-stack</b> developer learning <b>figma</b> designing, <b>databases</b>, <b>caching</b>
          , <b>ORM/ODM</b>, and <b>cloud</b>.</p>

          <ul className='HomeIconList'>
            <li className='NavLItem'><a href="https://drive.google.com/file/d/1UjRLHpH7fCXiAwW9umaZJpG4hgLzOsOT/view?usp=sharing" target="_blank" rel="noreferrer" ><img className='NavIcon' src= "./resume_black.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://github.com/Redninjale" target="_blank" rel="noreferrer"><img className='NavIcon' src= "./github_black.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/" target="_blank" rel="noreferrer"><img className='NavIcon' src= "./linkedin_black.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/"><img className='NavIcon' src= "./email_black.svg" type="image/svg" alt="Logo" /></a></li>
          </ul>
        </div>
      </div>
      <div className='HomeProjects'>
        <h2>Recent Projects</h2>
        <div className="HomeSkillsContainer">
          <HomeSkills src="./AN_bg.PNG" name={["JS", "React", "ML", "Python", "SQL", "Flask"]} ></HomeSkills>
          <HomeSkills src="./RT_bg.PNG" name={["JS", "Svelte", "Firebase", "ChakraUI", ""]} ></HomeSkills>
          <HomeSkills src="./AA_bg.PNG" name={["Python", "Pandas", "Sklearn"]}></HomeSkills>
        </div>
      </div>
    </div>
  )
}

const HomeSkills = (props) => {
  return (
    <div className="HomeSkills">
      <div className="HomeSkills-bg">
        <a href="#Projects">
          <img src={props.src} alt="None"/>
        </a>
      </div>
      <div className="HomeSkills-stack">
        {props.name && props.name.map((element) => (
          <HomeStackElement name={element} key={element} />
        ))}
      </div>
    </div>
  )
}
const HomeStackElement = (props) => {
  return (
    <div className="HomeStackElement">
      {props.name}
    </div>
  )
}

export default Home