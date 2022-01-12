import React from 'react'
import Button from '../../Button'
import './CardProjects.css'

const CardProjects = (props) => {
    return (
        <section className='card-projects'>
            <img src={props.image} alt={props.title} />
            <h4><span>{props.title}</span></h4>
            <p>{props.description}</p>
            <Button  text='React'/>
            <Button  text='Css'/>
            <Button  text='HTML'/>
        </section>
    )
}

export default CardProjects
