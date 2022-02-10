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
            <a href="https://download1639.mediafire.com/hho444darfhg/8xjodjyudyjml2v/Leandro-Palacios-CV.pdf">
              <Button
                type="download"
                href="Leandro-Palacios-CV.pdf"
                download="Leandro Palacios CV"
                style="main"
                text={texts.main.aboutDownloadCV}
              />
            </a>
          </div>
          <Skills />
        </div>
      </Fade>
    </section>
  );
};

export default About;
