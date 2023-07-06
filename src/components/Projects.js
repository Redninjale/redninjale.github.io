import React, { useEffect, useState } from 'react'
import './Projects.css';

function Projects() {
    const [headerBot, setHeaderBot] = useState(undefined);
    const [headerTop, setHeaderTop] = useState(undefined);

    function showMore() {
        var container = document.querySelector("div.PersonalContainer div.Project-title h1");
            
        if(!container.classList.contains("show")) {
            document.querySelector("div.More").classList.add("show");
            document.querySelector(".PersonalContainer").classList.add("show");
            document.querySelector("div.Project-title h1").classList.add("show");
        } else {
            document.querySelector("div.More").classList.remove("show");
            document.querySelector(".PersonalContainer").classList.remove("show");
            document.querySelector("div.Project-title h1").classList.remove("show");
        }
    }

    useEffect(() => {
        var items = document.querySelectorAll("li.CardItem");

        function isItemInView(item) {
            var rect = item.getBoundingClientRect();
            return (
                rect.top >= -300 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight + 300 || document.documentElement.clientHeight) &&
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
        });
    });

    useEffect(() => {
        const headerEl = document.querySelector("div.PersonalContainer").getBoundingClientRect();
        setHeaderBot(headerEl.bottom);
        setHeaderTop(headerEl.top);

        function headerSticky() {
            var header = document.querySelector("div.PersonalContainer div.Project-title h1");
            // console.log("SCROLL:" + window.scrollY);
            // console.log("TOP:" + headerTop);
            // console.log("BOT:" + headerBot);
            if (header && headerTop !== undefined && headerBot!== undefined && window.scrollY >= headerTop - 60 && 
                ((window.scrollY <= headerBot - 450 && !document.querySelector("div.PersonalContainer").classList.contains("show")) ||
                (window.scrollY <= headerBot + 320 && document.querySelector("div.PersonalContainer").classList.contains("show")))) {
                if(!header.classList.contains("is-sticky")) {
                    header.classList.add("is-sticky");
                }
            } else {
                if(header.classList.contains("is-sticky")) {
                    header.classList.remove("is-sticky");
                }
                if(header && headerBot && window.scrollY >= headerBot - 450) {
                    header.classList.add("bottom");
                } else if(header.classList.contains("bottom")) {
                    header.classList.remove("bottom");
                }
            }
        }
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
                    <Card
                        time="2023 RevTube"
                        photo="RT_projects.png"
                        description="Revtube is a aggie coding club project with a team of 10 to design a youtube alternative. Using a Firebase storage for video upload and for 
                        google authentication with nodejs. I managed the major components design and integration."
                        framework={["html/css/js", "svelte", "firebase"]}/>
                    <Card
                        time="2023 American Airlines ML"
                        photo="AA_projects.png"
                        description="75% accuracy on a machine learning challenge designed by American Airlines to analyze over a million data points. The challenge was to predict the amount of bags 
                        in a given domestic flight. Tested with optimization, nearest neighbors, gradient boost, linear regression, random forest models."
                        framework={["python3", "sklearn", "ML", "pandas", "karas", "matplotlib"]}/>
                    <Card 
                        time="2022 Fall Aggie News" 
                        description="A website webscraping Aggie-related news websites to centralize and provide preference 
          for selective news. Using the doc2vec API and google's recommendors library, the website analyzes personal preferences from surveys to curate 
          news articles for Aggies. SQL and python flask are the backend to store login authentication and process preferences." 
                        framework={["Team-20", "html/css/js", "react", "SQL", 
                    "flask", "python3", "axios", "doc2vec", "selenium"]}/>
                    <Card 
                        time="2022 Dec. Disney-plus-clone"
                        description="Practicing hmtl, css, and js to recreate the disney plus ui with a 
          firebase authentication and firebase database to manage the movies/images." 
                        framework={["html/css/js", "react redux", "firebase"]}/>
                    <Card 
                        time="2020 Spring Peariscope" 
                        description="Engineered a compact raspberry pi camera system in python using Vim and OpenCV. Built to 
          detect reflective tape patterns and symbols for robotics. This provides a vision system for a robot to optimize and assist robot trajectories. The peariscope 
          was a project with a fellow Houston mechatronics mentor." 
                        framework={["Python3", "OpenCV", "Robotics", "Raspberrypi", "vision"]}/>
                    <Card 
                        time="2019-2020 BB8 Makeshift" 
                        description="Designed a BB8 from star wars makeshift with a 3-wheeled crab drive and an auto balancing head. 
          The head was created with neodymium magnets to prevent head rotation as its body rotates. The body was engineered in Fusion360 with 3 motor controllers and
           controlled via bluetooth." 
                        framework={["Robotics", "Fusion360", "Network", "Bluetooth"]}/>
                </ul>
            </div>
            <div className="More"><img src="down-arrow.svg" onClick={() => {showMore();}} alt="Bad down"></img></div>
        </div>
    )
}

function Card(prop) {
    return (
        <li className='CardItem'>
            <div>
                <time>{prop.time}</time>
                <img src={prop.photo} className={prop.photo ? "ShowImg" : "HideImg"} alt="Not Projecting" type="jpg" />
                <p>{prop.description ? prop.description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "}
                </p>
                <span className="CardFrame">
                    {prop.framework ? prop.framework.map((e) => {
                        return (<span className="CardFrameItem">{e}</span>);
                    }) : <span></span>}
                </span>
            </div>
        </li>
    )
}

export default Projects