import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './Projects.css';

function Projects() {
  useEffect(() => {
    var items = document.querySelectorAll("li.CardItem");

    function isItemInView(item){
      var rect = item.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isItemInView(items[i])) {
            items[i].classList.add("show");
          }else {
            items[i].classList.remove("show");
          }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    items.forEach( item => {
      if(item) {
        item.querySelector("div").addEventListener("mouseover", () => {
          if (item.classList.contains("show")) item.classList.add("hover");
        });
        item.querySelector("div").addEventListener("mouseleave", () => {item.classList.remove("hover")});
      }
      
    }

    )
    // for (var i = 0; i < items.length; i++) {
    //   if(items[i].querySelector("div")) {
    //     items[i].querySelector("div").addEventListener("mouseover", hoveredFunc(items[i]));
    //     items[i].querySelector("div").addEventListener("mouseleave", unhoveredFunc(items[i]));
    //   }
    // }
  });
  
  
  return (
    <div className='ProjectsContainer'>
      <div className="ProjectsAnchor" id="Projects"></div>
      <div className='ProfessionalContainer'>
        <h1>Professional Projects</h1>
        <Slider/>
      </div>
      <div className='PersonalContainer'>
        <h1 id="Personal">Personal Projects</h1>
        <ul className='CardList'>
          <Card time="2022 Dec. Disney-plus-clone" description="Uses html, css, and javascript to recreate the disney plus ui with a 
          firebase authentication and firebase database to manage the movie images."/>
          <Card time="2022 Fall Aggie News" description="A website webscraping Aggie-related news websites to centralize and provide preference 
          for selective news. Using the doc2vec API and google's recommendors library, the website analyzes personal preferences from surveys to curate 
          news articles for Aggies. SQL and python flask are the backend to store login authentication and process preferences."/>
          <Card time="2020 Spring Peariscope" description="Engineered a compact raspberry pi camera system in python using Vim and OpenCV. Built to 
          detect reflective tape patterns and symbols for robotics. This provides a vision system for a robot to optimize and assist robot trajectories. The peariscope 
          was a project with a fellow Houston mechatronics mentor."/>
          <Card time="2019-2020 BB8 Makeshift" description="Designed a BB8 from star wars makeshift with a 3-wheeled crab drive and a auto balancing head. 
          The head was created with neodymium magnets to prevent head rotation as its body rotates. The body was engineered in Fusion360 with 3 motor controllers and
           controlled via bluetooth."/>
        </ul>
      </div>
    </div>
    // <div className='ProjectsContainer'>
    //     <div className='ProjectsGrid'>
          
    //         <Card name="NASA" description="Projectsing"/>
    //     </div>
    // </div>
  )
}

function Card(prop) {
    return (
        <li className='CardItem'>
          <div>
            <time>{prop.time}</time>
            <img src={prop.photo} className={prop.photo ? "ShowImg" : "HideImg"} alt="Not Projectsing" type="jpg"/>
            <p>{prop.description ? prop.description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "}
            </p>
          </div>
        </li>
    )
}

// function SliderSlide(prop) {
//   return(
//     <SwiperSlide className='Slider'>
//     </SwiperSlide>
//   )
// }

function Slider() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      direction={'vertical'}
      pagination={{ clickable: true}}
      navigation

      // autoplay= {{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}

      effect='fade'
      loop={true}
      // onSlideChange={active}
    >
      <SwiperSlide className='Slider'>
        <img className='swiper-slide' src="./nasa-astro.jpg" alt="swiper-bg"/>
        <div className='swiper-container'>
          <div className='swiper-title-container'>
            <img className='swiper-icon' src="./nasa-icon.png" alt="company" />
            <span className='swiper-title'>NASA</span>
          </div>
          <span className='swiper-subtitle'>Software Engineer Intern</span>
          <div className='swiper-context'>This was a NASA program by the ER4 Robotics division at JSC known for building Valkyrie and rovers 
          to develop robotics talents with rotational projects. The projects I developed utilized Python, Pandas, PythonQt, Altium, and Git. 
          I focused on the QtWidget project that optimizes the bill of material verification process. Using EEE-INST-002 derating standards,
          we created an interactive app for NASA engineers to upload their bill of materials and analyze any extensive or inappropriate use of 
          electrical components. We recieved large support after pitching this project to 50 NASA engineers for 
          advise and fine-tuning the interactive elements.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='Slider'>
      <img className='swiper-slide' src="./pearadox.jpg" alt="swiper-bg"/>
        <div className='swiper-container'>
          <div className='swiper-title-container'>
            <img className='swiper-icon' src="./pearadox-icon.png" alt="company" />
            <span className='swiper-title'>Pearadox</span>
          </div>
          <span className='swiper-subtitle'>Lead Software Engineer</span>
          <div className='swiper-context'>Pearadox is a robotics organization in the First Robotics Competition. I was the lead software engineer 
          for 3 years using Java, OpenCV, and WPILib API(FRC related API). During my time on the team, we won finalist at 4 district events and 1 World 
          Championship Subdivision. As well, we won 2 autonomous awards and 2 engineering inspiration awards.
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide className='Slider'>Slide 3</SwiperSlide>
      <SwiperSlide className='Slider'>Slide 4</SwiperSlide> */}
    </Swiper>
  )
}

export default Projects