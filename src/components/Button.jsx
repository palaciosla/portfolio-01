import React from 'react'

let mainButtonStyle = {
    color: "#fff",
    backgroundColor: "#678",
    padding: "1rem",
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
        <button type={props.type} style={props.style === 'main' ? mainButtonStyle : secondButtonStyle}>{props.text}</button>
    )
}

export default Button
