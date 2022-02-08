import React, { useContext } from "react";
import Ingles from "../../img/ingles.png";
import Espana from "../../img/espana.png";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

const NavbarLinks = (props) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, language, handleLanguage } = useContext(LanguageContext);

  return (
    <nav
      className={props.active ? "navbar-links is-active" : "navbar-links"}
      onClick={() => props.setIsMenuActive(false)}
    >
      <a href="#about">{texts.main.navbarLinks.about}</a>
      <a href="#projects">{texts.main.navbarLinks.projects}</a>
      <a href="#contact">{texts.main.navbarLinks.contact}</a>
      <div className="navbar-icons-container">
        {language === "en" ? (
          <button onClick={() => handleLanguage("es")}>
            <img src={Espana} alt="España"></img>
          </button>
        ) : (
          <button onClick={() => handleLanguage("en")}>
            <img src={Ingles} alt="English"></img>
          </button>
        )}
        {theme === "dark" ? (
          <button onClick={() => handleTheme("light")}>
            <img src={Sun} alt="Light"></img>
          </button>
        ) : (
          <button onClick={() => handleTheme("dark")}>
            <img src={Moon} alt="Dark"></img>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavbarLinks;
