import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import "./Home.css";
import { email } from './Header';

function Home() {
  useEffect(() => {
    var chao = document.querySelector(".HomeWelcome");
    var intro = document.querySelector(".HomeIntro");
    var name = document.querySelector("h1.HomeName");
    // var comp = false;

    if(chao && intro && name) {
      console.log(intro.innerHTML);
      chao.innerHTML = chao.innerHTML.replace("<span class='spacing'></span>", " ");
      intro.innerHTML = intro.innerHTML.replace("<span class='spacing'></span>", " ");
      name.innerHTML = name.innerHTML.replace("<span class='spacing'></span>", " ");

      var chaoText = [...chao.textContent];
      chao.innerHTML = "";
      chaoText.forEach(c => {
        if(c !== " ") {
          chao.innerHTML += "<span>" + c + "</span>";
        } else {
          chao.innerHTML += "<span class='spacing'></span>";
        }
      });

      var introText = [...intro.textContent];
      intro.innerHTML = "";
      introText.forEach(c => {
        if(c !== " ") {
          intro.innerHTML += "<span>" + c + "</span>";
        } else {
          intro.innerHTML += "<span class='spacing'></span>";
        }
      });

      var nameText = [...name.textContent];
      name.innerHTML = "";
      nameText.forEach(c => {
        if(c !== " ") {
          name.innerHTML += "<span>" + c + "</span>";
        } else {
          name.innerHTML += "<span classname='spacing'></span>";
        }
      });
    }

    var tl = anime.timeline({
      loop:false,
      easing: 'easeOutQuad',
      duration: 700
    });
    tl.add({
      targets: "h1.HomeWelcome span",
      translateY: [30, 0],
      opacity: [0, 1],
      delay: function(el, i) {
        return i * 100;
      }
    }, 900);
    tl.add({
      targets: "h1.HomeIntro span",
      translateY: [30, 0],
      opacity: [0, 1],
      delay: function(el, i) {
        return i * 100;
      },
    });
    tl.add({
      targets: "h1.HomeName span",
      translateY: [30,0],
      opacity: [0,1],
      delay: function(el, i) {
        return i * 200;
      }
    });
    tl.add({
      targets: ["img.HomeImage", "div.HomeContent", "div.HomeProjects"],
      opacity: [0, 1],
      translateY: [20, 0],
      delay: function(el, i) {
        return i * 900;
      }
    });
    tl.add({
      targets: "h1.HomeIntro span",
      translateY: [0,30],
      opacity: [1,0],
      delay: function(el, i) {
        return i * 100;
      }
    }, 9000);
  }, [])
  return (
    <div id='Home' className='HomeContainer'>
      <div className='HomeBody'>
        <div className='HomeNameContainer'>
          <div className="HomeWContainer">
            <h1 className='HomeWelcome'>Chào</h1>
            <h1 className="HomeIntro"> I am</h1>
          </div>
          <h1 className='HomeName'>Cameron Le</h1>
          <div>
            <img className='HomeImage' src="./portrait_3.jpg" alt="Not Working" />
          </div>
        </div>

        <div className='HomeContent'>
          <h2>Software engineer</h2>
          <h3>UI/UX, Backend, Data analytics</h3>
          <p>Howdy! I'm a <b>Computer Science student at Texas A&M University</b>. I plan on pursuing a Bachelors in Science. 
          I love to create and design using code. I am also an avid in-door rock climber and traveler.</p>
          <p>The industries that I have worked for include <b>Software Engineering</b> and Embedded Systems. I spent last summer working for <b>NASA</b> Johnson Space Center for software engineering. I actively participated
           in <b>robotics</b> for 4 years. At A&M, I am in <b>Aggie Coding Club</b> and <b>Aggie Data Science club</b> to collaborate
             and push for an environment that excels.</p>
          <p id="last">My <b>future direction</b> is currently in developing myself as a <b>full-stack</b> developer learning <b>figma</b> designing, <b>databases</b>, <b>caching</b>
          , <b>ORM/ODM</b>, and <b>cloud</b>.</p>

          <ul className='HomeIconList'>
            <li className='NavLItem'><a href="https://drive.google.com/file/d/1UjRLHpH7fCXiAwW9umaZJpG4hgLzOsOT/view?usp=sharing" target="_blank" rel="noreferrer" ><img className='NavIcon' src= "./resume_black.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://github.com/Redninjale" target="_blank" rel="noreferrer"><img className='NavIcon' src= "./github_black.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/" target="_blank" rel="noreferrer"><img className='NavIcon' src= "./linkedin_black.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem' value="white"><img className='NavIcon email' onClick={() => email('white')} src= "./email_black.svg" type="image/svg" alt="Logo" /></li>
          </ul>
        </div>
      </div>
      <div className='HomeProjects'>
        <h2>Recent Projects</h2>
        <div className="HomeSkillsContainer">
          <HomeSkills src="./AN_bg.PNG" name={["JS", "React", "ML", "Python", "SQL", "Flask"]} ></HomeSkills>
          <HomeSkills src="./RT_bg.PNG" name={["JS", "Svelte", "Firebase", "ChakraUI", "Figma"]} ></HomeSkills>
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