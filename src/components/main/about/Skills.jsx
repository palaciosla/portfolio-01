import React from 'react'

let tecnos = [
    {
        "id": "HTML",
        "icon": "https://img.icons8.com/color/452/html-5--v1.png"
    },
    {
        "id": "CSS",
        "icon": "https://img.icons8.com/color/344/css3.png"
    },
    {
        "id": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
    },
    {
        "id": "React",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        "id": "TypeScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        "id": "Redux",
        "icon": "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
    },
    // {
    //     "id": "GitHub",
    //     "icon": "https://img.icons8.com/stickers/344/github.png"
    // }
]


const Skills = () => {
    return (
        <div className='skills'>
            <h3>Skills</h3>
            <div className="skill-icons">
            {tecnos.map(tecno => {
                return (<div key={tecno.id}>
                    <img src={tecno.icon} alt={tecno.id} className='skill-icon'/>
                    <p>{tecno.id}</p>
                </div>)
            })}
            </div>
        </div>
    )
}

export default Skills
