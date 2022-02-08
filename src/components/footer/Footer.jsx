import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Logo from "../Logo";
import Social from "../main/contact/Social";

import "./Footer.css";

const Footer = () => {
  const { texts } = useContext(LanguageContext);
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="by">
          <h3>{texts.main.footerDesigned}</h3>
          <Logo />
          <h3>{year}</h3>
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
