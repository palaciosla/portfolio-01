import React, { useState } from "react";
import { useForm } from './useForm'

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (form.name.trim() === "") {
    errors.name = "El campo 'nombre' es requerido.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El nombre no es válido.";
  }

  if (form.email.trim()  === "") {
    errors.email = "El campo 'email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El email no es válido.";
  }

  if (form.message.trim()  === "") {
    errors.message = "El campo 'comentarios' es requerido";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "El comentario no puede superar los 255 caracteres.";
  }

  return errors;
};

const FormContact = () => {
//   const [isSubmit, setIsSubmit] = useState(undefined);
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

//   const onSubmit = (data) => {
//     console.log(data);

//     setIsSubmit(true);

//     setTimeout(() => {
//       setIsSubmit(undefined);
//     }, 3000);
//   };

  return (
    <>
      <form
        className="form"
        // onSubmit={handleSubmit(onSubmit)}
        id="form-contact"
        action="https://formsubmit.co/palaciosleandroad@gmail.com"
        method="POST"
      >
        <h2 className="form-title">¡Enviame un mensaje!</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre *"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
         {errors.name && <p className="error error-pattern">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email *"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p className="error error-pattern">{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Mensaje *"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.message}
          required
        />
        {errors.message && <p className="error error-pattern">{errors.message}</p>}
        <input type="submit" value="SUBMIT" formTarget="_blank" />
      </form>
      {/* {isSubmit ? (
        <p className="enviado">¡Mensaje enviado correctamente!</p>
      ) : isSubmit === undefined ? (
        <p></p>
      ) : (
        <p className="error">¡No se pudo enviar!</p>
      )} */}
    </>
  );
};

export default FormContact;
