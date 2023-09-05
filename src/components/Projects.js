import React, { useEffect, useState } from 'react'
import { projText } from '../Constants';
import './Projects.css';

function Projects() {
    const [headerTop, setHeaderTop] = useState(undefined);
    const [headerHeight, setHeaderHeight] = useState(undefined);

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
        var headerEl = document.querySelector("div.PersonalContainer").getBoundingClientRect();
        if(!headerTop) {
            setHeaderTop(headerEl.top);
        }

        function headerSticky() {
            headerEl = document.querySelector("div.PersonalContainer").getBoundingClientRect();
            var header = document.querySelector("div.Project-title h1");
            if(headerEl.height !== headerHeight) {
                setHeaderHeight(headerEl.height);
            }

            if(header && headerTop && headerHeight && headerTop !== undefined && headerHeight !== undefined) {
                // 44 is the show more height
                var headerBot = headerTop + headerHeight + 44;
                // console.log("TOP:" + headerTop);
                // console.log("BOT " + headerBot);
                // console.log("HEIGHT " + headerEl.height);
                // console.log("WINDOW: " + window.scrollY);
                // console.log("HEADERH: " + header.getBoundingClientRect().height);

                if (window.scrollY >= headerTop && 
                    //Checks from nothing to sticky
                    window.scrollY <= headerBot - header.getBoundingClientRect().height) {
                    if(!header.classList.contains("is-sticky")) {
                        header.classList.add("is-sticky");
                        header.style.top = "";
                    }

                } else {
                    //Change from sticky to bottom or nothing
                    if(header.classList.contains("is-sticky")) {
                        header.classList.remove("is-sticky");
                    }

                    //Checks for bottom or nothing
                    if(window.scrollY > headerBot - header.getBoundingClientRect().height) {
                        header.style.top = `${headerHeight - header.getBoundingClientRect().height + 100 - 44}px`;
                    } 
                }
            }
        }
        window.addEventListener("load", headerSticky);
        window.addEventListener("resize", headerSticky);
        window.addEventListener("scroll", headerSticky);
    }, [headerHeight, headerTop]);

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
                        href={projText.revtube.href}
                        photo={projText.revtube.photo}
                        description={projText.revtube.description}
                        framework={projText.revtube.framework}/>
                    <Card
                        time={projText.americanAirlines.time}
                        href={projText.americanAirlines.href}
                        photo={projText.americanAirlines.photo}
                        description={projText.americanAirlines.description}
                        framework={projText.americanAirlines.framework}/>
                    <Card
                        time={projText.aggieNews.time}
                        href={projText.aggieNews.href}
                        photo={projText.aggieNews.photo}
                        description={projText.aggieNews.description}
                        framework={projText.aggieNews.framework}/>
                    <Card
                        time={projText.disneyPlusClone.time}
                        href={projText.disneyPlusClone.href}
                        photo={projText.disneyPlusClone.photo}
                        description={projText.disneyPlusClone.description}
                        framework={projText.disneyPlusClone.framework}/>
                    <Card
                        time={projText.peariscope.time}
                        href={projText.peariscope.href}
                        description={projText.peariscope.description}
                        framework={projText.peariscope.framework}/>
                    <Card
                        time={projText.bb8.time}
                        href={projText.bb8.href}
                        photo={projText.bb8.photo}
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
                <a href={prop.href} rel="noreferrer" target='_blank'><img src="./arrow-up-right-from-square.svg" alt="No Redirect"/></a>
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