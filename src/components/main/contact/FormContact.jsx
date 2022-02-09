import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import { useForm } from "../../../hooks/useForm";
import Loader from "../../Loader.js";

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
    errors.name = "'Name' is required.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The name is not valid.";
  }

  if (form.email.trim() === "") {
    errors.email = "'Email' is required.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The email is not valid.";
  }

  if (form.message.trim() === "") {
    errors.message = "'Message' is required.";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "The message cannot exceed 255 characters.";
  }

  return errors;
};

const FormContact = () => {
  const { texts } = useContext(LanguageContext);
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <form className="form" onSubmit={handleSubmit} id="form-contact">
        <h2 className="form-title">{texts.main.contactSendEmail}</h2>
        <input
          type="text"
          name="name"
          placeholder={texts.main.contactFormName}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p className="error error-pattern">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder={texts.main.contactFormEmail}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p className="error error-pattern">{errors.email}</p>}
        <textarea
          name="message"
          placeholder={texts.main.contactFormMessage}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.message}
          required
        />
        {errors.message && (
          <p className="error error-pattern">{errors.message}</p>
        )}
        <input type="submit" value={texts.main.contactFormButton} />
      </form>
      {loading && <Loader />}
      {response && <p className="enviado">{texts.main.contactSucces}</p>}
    </>
  );
};

export default FormContact;
