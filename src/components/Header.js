import React, { useEffect, useState } from 'react'
import './Header.css'

function Header() {
    const [menu, setMenu] = useState(true);
    const [menuToggle, setMenuToggle] = useState(true);

    function toggleMenu() {
        setMenuToggle(!menuToggle);
    }
    useEffect(() => {
        const menuConfig = () => {
            if (window.innerWidth <= 700) {
                setMenu(true);
                setMenuToggle(true);
                document.querySelector("div.NavList").classList.add("menu");
            } else {
                setMenu(false);
                setMenuToggle(true);
                document.querySelector("div.NavList").classList.remove("menu");
            }
        }
        window.addEventListener('load', menuConfig);
        window.addEventListener('resize', menuConfig);
    }, [menu, menuToggle]);

    return (
        <div className='NavBar'>
            <div className='NavList'>
                {menuToggle && <span id="hContact"><a className='NavLink' href='#Contact'>Contact</a></span>}

                {menu ?
                    <>
                        <img id="menuIcon"
                            onClick={toggleMenu}
                            src={(menuToggle ? "menu.svg" : "cross.svg")}
                            alt=""
                            style={{
                                width: menuToggle ? 25 : 15,
                                height: menuToggle ? 25 : 15,
                                top: menuToggle ? 13 : 18.5,
                                right: menuToggle ? 40 : 45
                            }}

                        />
                        {(!menuToggle && <Menurender />)}
                    </>
                    :
                    (
                        <div style={{ paddingRight: 45 }}>
                            <ul className='NavList'>
                                <li className='NavLItem'><a className='NavLink' href='#Home'>Home</a></li>
                                <li className='NavLItem'><a className='NavLink' href='#Experience'>Experience</a></li>
                                <li className='NavLItem'><a className='NavLink' href='#Projects'>Projects</a></li>
                            </ul>
                            <SocialRender color="black" />
                        </div>
                    )
                }
            </div>
        </div>
    );
}



const Menurender = () => {
    return (
        <>
            <li className='NavMItem'><a className='NavLink' href='#Home'>Home</a></li>
            <li className='NavMItem'><a className='NavLink' href='#Experience'>Experience</a></li>
            <li className='NavMItem'><a className='NavLink' href='#Projects'>Projects</a></li>
            <SocialRender color="black" />
        </>
    );
}

function SocialRender({ color }) {
    return (
        <ul style={{
            display: "flex",
            height: "100%",
            listStyle: "none",
            alignItems: "center",
            backgroundColor: "var(--header-bg)",
            justifyContent: "center",
            gap: "10px"
        }} className='socials' >
            <li className='NavLItem'><a href="https://drive.google.com/file/d/1UjRLHpH7fCXiAwW9umaZJpG4hgLzOsOT/view?usp=sharing" target="_blank" rel="noreferrer" ><img className='NavIcon' src="./resume.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://github.com/Redninjale" target="_blank" rel="noreferrer"><img className='NavIcon' src="./github.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/" target="_blank" rel="noreferrer"><img className='NavIcon' src="./linkedin.svg" type="image/svg" alt="Logo" /></a></li>
            <li className='NavLItem'><img className='NavIcon email' onClick={() => email(color)} src="./email.svg" type="image/svg" alt="Logo" /></li>
        </ul>
    );
}

export function email(color) {
    var select = color === 'black' ? '.NavIconList  li.NavLItem:nth-child(4)' : '.HomeIconList  li.NavLItem:nth-child(4)';
    // console.log(select);
    var element = document.querySelector(select);
    navigator.clipboard.writeText("le.ph.cameron@gmail.com").then(
        () => {
            element.classList += ' clicked';
            setTimeout(
                () => element.classList.remove('clicked'), 1000
            )
        },
        () => {
            alert('Failed to Copy');
        }
    );
}

export default Header;