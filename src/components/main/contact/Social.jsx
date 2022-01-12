import React from 'react'
import Email from '../../../img/email.png'
import Whatsapp from '../../../img/whatsapp.png'
import Github from '../../../img/github.png'
import Linkedin from '../../../img/linkedin.png'

import './Social.css'

const Social = () => {
    return (
        <div className='social'>
            <a href="www.google.com" target='_blank'  rel="noreferrer">
                <img src={Email} alt="email" />
            </a>
            <a href="https://www.linkedin.com/in/leandro-adalberto-palacios-788872228/" target='_blank'  rel="noreferrer">
                <img src={Linkedin} alt="email" />
            </a>
            <a href="https://github.com/palaciosla" target='_blank'  rel="noreferrer">
                <img src={Github} alt="email" />
            </a>
            <a href="www.google.com" target='_blank'  rel="noreferrer">
                <img src={Whatsapp} alt="email" />
            </a>
        </div>
    )
}

export default Social
