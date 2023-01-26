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
                    <li className='NavLItem'><a className='NavLink' href='/'>About Me</a></li>
                    <li className='NavLItem'><a className='NavLink' href='/'>Work</a></li>
                    <li className='NavLItem'><a className='NavLink' href='/'>Projects</a></li>
                    <li className='NavLItem'><a className='NavLink' href='/'>Contact</a></li>
                </ul>

                <ul className='NavIconList'>
                    <li className='NavLItem'><Link><img className='NavIcon' src= "./resume.png" type="image/png" alt="Logo" /></Link></li>
                    <li className='NavLItem'><a href="https://github.com/Redninjale"><img className='NavIcon' src= "./github.png" type="image/png" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/"><img className='NavIcon' src= "./linkedin.png" type="image/png" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/"><img className='NavIcon' src= "./gmail.png" type="image/png" alt="Logo" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;