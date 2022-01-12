import React, {useState} from 'react'
import Ingles from '../../img/ingles.png'
import Espana from '../../img/espana.png'

const NavbarLinks = () => {
    const [español, setEspañol] = useState(true)

    const handleLenguage = () => {
        if(español) {
            setEspañol(false)
        } else {
            setEspañol(true)
        }
    }

    return (
        <nav className='navbar-links'>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            {español 
                ? <img onClick={handleLenguage} src={Espana} alt='España'></img>
                : <img onClick={handleLenguage} src={Ingles} alt='English'></img>}          
        </nav>
    )
}

export default NavbarLinks
