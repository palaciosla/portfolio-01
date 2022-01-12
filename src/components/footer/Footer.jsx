import React from 'react'
import Logo from '../Logo'
import Social from '../main/contact/Social'

import './Footer.css'

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='by'>
                    <h3>Designed and Developed by</h3>
                    <Logo />
                    <h3>{year}</h3>
                </div>
                <Social />
            </div>
        </footer>
    )
}

export default Footer
