import React from 'react'

const FormContact = () => {
    return (
        <form className='form'>
            <input type="text" name="user_name" placeholder='Nombre' />
            <input type="email" name="user_email" placeholder='Email'/>
            <textarea name="message" placeholder='Mensaje'/>
            <input type="submit" value="Send" />
        </form>
    )
}

export default FormContact
