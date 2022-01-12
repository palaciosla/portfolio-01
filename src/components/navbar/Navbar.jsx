import React from 'react'
import MenuIcon from '../../img/menu.png'
import NavbarLinks from './NavbarLinks'
import './Navbar.css'
import Logo from '../Logo'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <Logo />
                <NavbarLinks />
                <img src={MenuIcon} alt="menu icon" className='menu-icon' />
            </div>
        </div>
    )
}

export default Navbar
