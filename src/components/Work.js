import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './Work.css';

function Work() {
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
    <div className='WorkContainer'>
      <Slider/>
      <h1 id="Work">Projects</h1>
      <ul className='CardList'>
        <Card time="2022 Summer NASA" photo="./nasa-astro.jpg"/>
        <Card time="2019-2022 First Robotics Team"/>
        <Card time="2022 Dec. Disney-plus-clone"/>
        <Card time="2022 Fall Aggie News"/>
        <Card time="2020 Spring Peariscope"/>
        <Card time="2019-2020 BB8 Makeshift"/>
      </ul>
    </div>
    // <div className='WorkContainer'>
    //     <div className='WorkGrid'>
          
    //         <Card name="NASA" description="Working"/>
    //     </div>
    // </div>
  )
}

function Card(prop) {
    return (
        <li className='CardItem'>
          <div>
            <time>{prop.time}</time>
            <img src={prop.photo} className={prop.photo ? "ShowImg" : "HideImg"} alt="Not working" type="jpg"/>
            <p>{prop.description ? prop.description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "}
            </p>
          </div>
        </li>
    )
}

function Slider() {
  // function active() {
  //   var x = document.querySelector(".swiper-pagination-bullet-active");
  //   x.innerHTML = "NASA";
  // }

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
      <SwiperSlide className='Slider'><img className='swiper-slide' src='./nasa-astro.jpg'/>NASA</SwiperSlide>
      <SwiperSlide className='Slider'>PEARADOX</SwiperSlide>
      {/* <SwiperSlide className='Slider'>Slide 3</SwiperSlide>
      <SwiperSlide className='Slider'>Slide 4</SwiperSlide> */}
    </Swiper>
  )
}

export default Work