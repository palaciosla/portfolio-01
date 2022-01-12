import React from 'react'

import Fade from 'react-reveal/Fade';
import CardProjects from './CardProjects';
import Imagen from '../../../img/pro1.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <Fade left>
                <h2 className='title-section'>PROJECTS</h2>
            </Fade>
            <Fade right>
                <div className="projects-content">
                    <CardProjects title="Portfolio Personal" image={Imagen} description='Simple portfolio hecho para mi búsqueda laboral'/>
                    <CardProjects title="Portfolio Personal" image={Imagen} description='Simple portfolio hecho para mi búsqueda laboral'/>
                    <CardProjects title="Portfolio Personal" image={Imagen} description='Simple portfolio hecho para mi búsqueda laboral'/>
                    <CardProjects title="Portfolio Personal" image={Imagen} description='Simple portfolio hecho para mi búsqueda laboral'/>
                    <CardProjects title="Portfolio Personal" image={Imagen} description='Simple portfolio hecho para mi búsqueda laboral'/>
                    <CardProjects title="Portfolio Personal" image={Imagen} description='Simple portfolio hecho para mi búsqueda laboral'/>
                </div>
            </Fade>
        </div>
    )
}

export default Projects
