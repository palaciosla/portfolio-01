import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import "./About.css";
import Skills from "./Skills.jsx";

import Foto from "../../../img/foto-cv.png";
import Button from "../../Button";
import LanguageContext from "../../../context/LanguageContext";

const About = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <section className="about" id="about">
      <Fade left>
        <div className="about-mifoto">
          <img src={Foto} alt="Foto" className="foto" />
        </div>
        <h2 className="title-section">{texts.main.aboutTitle}</h2>
      </Fade>
      <Fade right>
        <div className="about-content">
          <div className="about-me">
            <div
              dangerouslySetInnerHTML={{ __html: texts.main.aboutDescription }}
            ></div>

            <Button
              type="download"
              style="main"
              text={texts.main.aboutDownloadCV}
            />
          </div>
          <Skills />
        </div>
      </Fade>
    </section>
  );
};

export default About;
