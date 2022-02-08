import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import "./Main.css";
import Projects from "./projects/Projects";

const Main = () => {
  return (
    <div className="main" id="main">
      <div className="main-container">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
