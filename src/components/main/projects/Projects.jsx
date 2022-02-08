import React, { useContext } from "react";

import Fade from "react-reveal/Fade";
import CardProjects from "./CardProjects";

import "./Projects.css";
import listProjects from "./listProjects";
import LanguageContext from "../../../context/LanguageContext";

const Projects = () => {
  const { texts } = useContext(LanguageContext);
  
  return (
    <div className="projects" id="projects">
      <Fade left>
        <h2 className="title-section">{texts.main.projectsTitle}</h2>
      </Fade>
      <Fade right>
        <div className="projects-content">
          {listProjects.map((project) => {
            return (
              <CardProjects
                key={project.title}
                title={project.title}
                image={project.image}
                description={project.description}
                descriptionModal={project.descriptionModal}
                tags={project.tags}
                linkGit={project.linkGit}
                linkDemo={project.linkDemo}
              />
            );
          })}
          
        </div>
        <h3 className="projects-more">{texts.main.projectInvite}</h3>
      </Fade>
    </div>
  );
};

export default Projects;

/*
<CardProjects
            title="Portfolio Personal"
            image={Imagen}
            description="Simple portfolio hecho para mi búsqueda laboral"
          />
          <CardProjects
            title="Portfolio Personal"
            image={Imagen}
            description="Simple portfolio hecho para mi búsqueda laboral"
          />
          <CardProjects
            title="Portfolio Personal"
            image={Imagen}
            description="Simple portfolio hecho para mi búsqueda laboral"
          />
          <CardProjects
            title="Portfolio Personal"
            image={Imagen}
            description="Simple portfolio hecho para mi búsqueda laboral"
          />
          <CardProjects
            title="Portfolio Personal"
            image={Imagen}
            description="Simple portfolio hecho para mi búsqueda laboral"
          />
          <CardProjects
            title="Portfolio Personal"
            image={Imagen}
            description="Simple portfolio hecho para mi búsqueda laboral"
          />
*/
