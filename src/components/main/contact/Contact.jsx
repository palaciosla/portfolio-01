import React from 'react';

import Fade from 'react-reveal/Fade';
import FormContact from './FormContact';
import Social from './Social';
import Or from '../../Or.jsx'

import './Contact.css'

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <section >
                <Fade left>
                <h2 className='title-section'>CONTACT</h2>
                </Fade>
                <Fade right>
                    <Social />
                    <Or />
                    <FormContact />
                </Fade>
            </section>
        </section>
    )
}

export default Contact
