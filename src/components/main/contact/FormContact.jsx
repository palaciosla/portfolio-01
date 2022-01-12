import React, {useState} from 'react'

const FormContact = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmit, setIsSubmit] = useState(undefined)

    console.log(value)

    const handleSubmit = e => {
        e.preventDefault()
        setValue({
            name: e.target.user_name.value,
            email: e.target.user_email.value,
            message : e.target.message.value
        })

        setIsSubmit(true)

        setTimeout(() => {
            setIsSubmit(undefined)
        }, 4000);
    }


    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" name="user_name" placeholder='Nombre' />
                <input type="email" name="user_email" placeholder='Email'/>
                <textarea name="message" placeholder='Mensaje'/>
                <input type="submit" value="SUBMIT" />
            </form>
            {isSubmit
                ? <p className="enviado">¡Mensaje enviado!</p>
                : isSubmit === undefined 
                    ? <p></p> 
                    : <p className="error">¡No se pudo enviar!</p>}
        </>
    )
}

export default FormContact
