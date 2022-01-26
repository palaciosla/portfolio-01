import React from 'react'
import Fade from 'react-reveal/Fade';

import './About.css'
import Skills from './Skills.jsx';

import Foto from '../../../img/man.png'
import Button from '../../Button';


const About = () => {
    return (
        <section className='about' id='about'>
            <Fade left>
                <div className="about-mifoto">
                    <img src={Foto} alt="Foto" className="foto" />
                </div>
                <h2 className='title-section'>ABOUT ME</h2>
            </Fade>
            <Fade right>
                <div className="about-content">
                    <div className="about-me">
                        <h4> I'm <span>Leandro</span> </h4>

                        <p>⚡ I'm a software engineer focusing on Front-End web.</p>

                        <p>⚡ You can find me working with <span>JavaScript, React, HTML and CSS.</span></p>

                        <p>⚡ I love to learn about programmation</p>

                        <p>⚡Since 2015 - I've spent my time seeking and learning new technologies and forms of digital expression. This has led to me working on some amazing world-class projects, worked at some amazing places, and worked with some great people.</p>
                        <p>🚩 I'm living in <span>Buenos Aires, Argentina</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quia nesciunt. Numquam autem ullam, laborum accusantium, ad vero dolor delectus officiis aliquam cum assumenda! </p>
                    </div>
                    <Skills />
                </div>
                <Button type="download" style="main" text="Descargar CV" />
                
            </Fade>
        </section>
    )
}

export default About
