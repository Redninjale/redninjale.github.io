import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='NavBar'>
            <div className='NavList'>
                {/* <Link to="/"><img className='NavLogo' src= "./largerlogo.png" type="image/png" alt="Logo" /></Link> */}
                {/* <span><a className='NavLink' id="hContact" href='#Contact'>Contact</a></span> */}
                
                <ul className='NavList'>
                    <li className='NavLItem'><a className='NavLink' href='#Home'>Home</a></li>
                    <li className='NavLItem'><a className='NavLink' href='#Experience'>Experience</a></li>
                    <li className='NavLItem'><a className='NavLink' href='#Projects'>Projects</a></li>
                </ul>

                <ul className='NavIconList'>
                    <li className='NavLItem'><a href="https://drive.google.com/file/d/1UjRLHpH7fCXiAwW9umaZJpG4hgLzOsOT/view?usp=sharing" target="_blank" rel="noreferrer" ><img className='NavIcon' src= "./resume.svg" type="image/svg" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://github.com/Redninjale" target="_blank" rel="noreferrer"><img className='NavIcon' src= "./github.svg" type="image/svg" alt="Logo" /></a></li>
                    <li className='NavLItem'><a href="https://www.linkedin.com/in/cameron-le-09430a24a/" target="_blank" rel="noreferrer"><img className='NavIcon' src= "./linkedin.svg" type="image/svg" alt="Logo" /></a></li>
                    <li className='NavLItem'><img className='NavIcon email' onClick={() => email("black")} src= "./email.svg" type="image/svg" alt="Logo" /></li>
                </ul>
            </div>
        </div>
    )
}

export function email(color) {
    var select =  color === 'black' ? '.NavIconList  li.NavLItem:nth-child(4)' : '.HomeIconList  li.NavLItem:nth-child(4)';
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