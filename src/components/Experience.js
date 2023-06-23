import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './Experience.css'

function Experience() {
  return (
    <div className="ExperienceContainer">
        <div className="ExperienceAnchor" id="Experience"></div>
        <div className='ExperienceContent'>
            <h1>Experience</h1>
            <Slider/>
        </div>
    </div>
  )
}

function Slider() {
    return (
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
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
            <div className="swiper-divider"></div>
            <div className="swiper-content">
              <span className='swiper-subtitle'>Software Engineer Intern</span>
              <div className='swiper-context'>This was a NASA program by the ER4 Robotics division at JSC known for building Valkyrie and rovers 
              to develop robotics talents with rotational projects. The projects I developed utilized Python, Pandas, PythonQt, Altium, and Git. 
              I focused on the QtWidget project that optimizes the bill of material verification process. Using EEE-INST-002 derating standards,
              we created an interactive app for NASA engineers to upload their bill of materials and analyze any extensive or inappropriate use of 
              electrical components. We recieved large support after pitching this project to 50 NASA engineers for 
              advise and fine-tuning the interactive elements.
            </div>
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
            <div className="swiper-divider"></div>
            <div className="swiper-content">
              <span className='swiper-subtitle'>Lead Software Engineer</span>
              <div className='swiper-context'>Pearadox is a robotics organization in the First Robotics Competition. I was the lead software engineer 
              for 3 years using Java, OpenCV, and WPILib API(FRC related API). During my time on the team, we won finalist at 4 district events and 1 World 
              Championship Subdivision. As well, we won 2 autonomous awards and 2 engineering inspiration awards.
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className='Slider'>Slide 3</SwiperSlide>
        <SwiperSlide className='Slider'>Slide 4</SwiperSlide> */}
      </Swiper>
    )
  }

export default Experience