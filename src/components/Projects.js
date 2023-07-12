import React, { useEffect, useState } from 'react'
import { projText } from '../Constants';
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
        // window.addEventListener("load", callbackFunc);
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
                (window.scrollY <= headerBot + 225 && document.querySelector("div.PersonalContainer").classList.contains("show")))) {
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
                        time={projText.revtube.time}
                        photo={projText.revtube.photo}
                        description={projText.revtube.description}
                        framework={projText.revtube.framework}/>
                    <Card
                        time={projText.aggieNews.time}
                        photo={projText.aggieNews.photo}
                        description={projText.aggieNews.description}
                        framework={projText.aggieNews.framework}/>
                    <Card
                        time={projText.disneyPlusClone.time}
                        description={projText.disneyPlusClone.description}
                        framework={projText.disneyPlusClone.framework}/>
                    <Card
                        time={projText.peariscope.time}
                        description={projText.peariscope.description}
                        framework={projText.peariscope.framework}/>
                    <Card
                        time={projText.bb8.time}
                        description={projText.bb8.description}
                        framework={projText.bb8.framework}/>
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
                <p>{prop.description ? prop.description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
                + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim "
                + "ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}
                </p>
                <span className="CardFrame">
                    {prop.framework ? prop.framework.map((e) => {
                        return (<span className="CardFrameItem">{e}</span>);
                    }) : <span></span>}
                </span>
            </div>
        </li>
    );
}

export default Projects