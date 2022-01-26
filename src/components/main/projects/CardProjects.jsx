import React from 'react'
import Button from '../../Button'
import './CardProjects.css'

const CardProjects = ({image, title,description, tags}) => {
    return (
        <section className='card-projects'>
            <img src={image.Imagen} alt={title} />
            <h4><span>{title}</span></h4>
            <p>{description}</p>
            {tags.map(tag => {
                return (
                    <Button  text={tag} key={tag}/>
                )
            })}
        </section>
    )
}

export default CardProjects
