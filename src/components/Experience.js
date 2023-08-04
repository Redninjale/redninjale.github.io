import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper';
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
              <div className='swiper-context'>Worked at the <b>ER4 Robotics NASA division</b> at JSC(Valkyrie and rovers) 
              to develop robotics talents with <b>rotational projects</b>.
              <div className='swiper-context'>
              The projects I developed utilized <b>Python, Pandas, PythonQt, Altium, and Git</b>. 
              I focused on a <b>QtWidget</b> project that <b>optimizes the bill of material verification process</b>. Using EEE-INST-002 derating standards,
              we created an interactive app for NASA engineers to upload their bill of materials and analyze any extensive or inappropriate use of 
              electrical components. 
                </div>
                <div className='swiper-context'>
                We recieved <b>large support</b> after pitching this project to <b>50 NASA engineers</b> for 
              advise and fine-tuning the interactive elements.
                </div>
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
              <div className='swiper-context'>Pearadox is a robotics organization in the First Robotics Competition. I was the <b>lead software engineer</b> 
              for 3 years using <b>Java, OpenCV, and WPILib API</b>(FRC related API). 
              <div className='swiper-context'>
              During my time on the team, we won finalist at <b>4 district events</b> and <b>2 World 
              Championship Subdivision</b>. As well, we won a <b>autonomous robot</b> and 2 engineering inspiration awards.
              </div>
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