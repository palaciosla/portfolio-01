import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h2>{texts.hero.hi} </h2>
        <h1 className="text_pop">
          <span>L</span>
          <span>E</span>
          <span>A</span>
          <span>N</span>
          <span>D</span>
          <span>R</span>
          <span>O</span>
          <br />
          <span>P</span>
          <span>A</span>
          <span>L</span>
          <span>A</span>
          <span>C</span>
          <span>I</span>
          <span>O</span>
          <span>S</span>
        </h1>
        <h2>{texts.hero.developer}</h2>
        <a href="#about">
          <img
            src="https://img.icons8.com/doodle/344/chevron-down.png"
            alt="Start"
            className="start-button"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
