import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='NavBar'>
            <div className='NavList'>
                <Link to="/"><img className='NavLogo' src= "./largerlogo.png" type="image/png" alt="Logo" /></Link>
                <ul className='NavList'>
                    <li className='NavLItem'><a className='NavLink' href='#Home'>Home</a></li>
                    <li className='NavLItem'><a className='NavLink' href='#AboutMe'>About Me</a></li>
                    <li className='NavLItem'><a className='NavLink' href='#Work'>Work</a></li>
                    {/* <li className='NavLItem'><a className='NavLink' href='/'>Projects</a></li> */}
                    <li className='NavLItem'><a className='NavLink' href='#Footer'>Contact</a></li>
                </ul>

                <ul className='NavIconList'>
                    <li className='NavLItem'><a href="https://drive.google.com/file/d/1UjRLHpH7fCXiAwW9umaZJpG4hgLzOsOT/view?usp=sharing" target="_blank" rel="noreferrer" ><img className='NavIcon' src= "./resume.png" type="image/png" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://github.com/Redninjale" target="_blank"><img className='NavIcon' src= "./github.png" type="image/png" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/" target="_blank"><img className='NavIcon' src= "./linkedin.png" type="image/png" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/"><img className='NavIcon' src= "./gmail.png" type="image/png" alt="Logo" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;