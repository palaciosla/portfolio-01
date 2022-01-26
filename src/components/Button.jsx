import React from 'react'

let mainButtonStyle = {
    fontFamily: "inherit",
    backgroundColor: "#39b175",
    color: "#fff",
    borderRadius: "5px",
    padding: ".8rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: ".9rem"
}

let secondButtonStyle = {
    color: "#0be779",
    backgroundColor: "#5D697F",
    padding: ".3rem",
    margin: ".5rem",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: ".7rem"
}

const Button = (props) => {
    return (
        <button className='btn' type={props.type} style={props.style === 'main' ? mainButtonStyle : secondButtonStyle}>{props.text}</button>
    )
}

export default Button
