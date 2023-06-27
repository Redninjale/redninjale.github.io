import React, { useEffect, useState } from 'react'
import './Projects.css';

function Projects() {
    const [headerBot, setHeaderBot] = useState(undefined);
    const [headerTop, setHeaderTop] = useState(undefined);


    useEffect(() => {
        var items = document.querySelectorAll("li.CardItem");

        function isItemInView(item) {
            var rect = item.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight + 100 || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isItemInView(items[i])) {
                    items[i].classList.add("show");
                } else {
                    items[i].classList.remove("show");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
        items.forEach(item => {
            if (item) {
                item.querySelector("div").addEventListener("mouseover", () => {
                    if (item.classList.contains("show")) item.classList.add("hover");
                });
                item.querySelector("div").addEventListener("mouseleave", () => { item.classList.remove("hover") });
            }
        }
        )
    });

    useEffect(() => {
        const headerEl = document.querySelector(".PersonalContainer div.Project-title h1").getBoundingClientRect();
        setHeaderBot(headerEl.bottom);
        setHeaderTop(headerEl.top);

        function headerSticky() {
            var header = document.querySelector(".PersonalContainer div.Project-title h1");
            console.log(headerBot);
            if (header && window.scrollY >= headerTop - 60 && window.scrollY <= headerBot + 220) {
                // console.log(window.scrollY);
                header.classList.add("is-sticky");
            } else {
                if(header.classList.contains("is-sticky")) {
                    header.classList.remove("is-sticky");
                }
                if(header && window.scrollY >= headerBot + 222) {
                    header.classList.add("bottom");
                } else if(header.classList.contains("bottom")) {
                    header.classList.remove("bottom");
                }
            }
        }

        // window.addEventListener("load", headerSticky);
        window.addEventListener("resize", headerSticky);
        window.addEventListener("scroll", headerSticky);
    }, [headerTop, headerBot]);

    return (
        <div className='ProjectsContainer'>
            <div className='PersonalContainer'>
                <div id="Projects"></div>
                <div className="Project-title">
                    <h1>Projects</h1>
                    <div></div>
                </div>
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
    )
}

function Card(prop) {
    return (
        <li className='CardItem'>
            <div>
                <time>{prop.time}</time>
                <img src={prop.photo} className={prop.photo ? "ShowImg" : "HideImg"} alt="Not Projectsing" type="jpg" />
                <p>{prop.description ? prop.description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "}
                </p>
            </div>
        </li>
    )
}

export default Projects