import React, { useContext } from "react";

import Fade from "react-reveal/Fade";
import FormContact from "./FormContact";
import Social from "./Social";
import Or from "../../Or.jsx";

import "./Contact.css";
import LanguageContext from "../../../context/LanguageContext";

const Contact = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section className="contact" id="contact">
      <section>
        <Fade left>
          <h2 className="title-section">{texts.main.contactTitle}</h2>
        </Fade>
        <Fade right>
          <Social />
          <Or text={texts} />
          <FormContact />
        </Fade>
      </section>
    </section>
  );
};

export default Contact;
