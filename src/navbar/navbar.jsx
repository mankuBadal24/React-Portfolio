// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { NavItems } from './NavItems'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
   
    return (

        <>
            <nav>
 
                <ul>
                    <li>
                        <NavLink to='/'  >About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' >Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio'>projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>contact</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    )
}
