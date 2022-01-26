import React from "react";

import Fade from "react-reveal/Fade";
import CardProjects from "./CardProjects";

import "./Projects.css";
import listProjects from "./listProjects";



const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Fade left>
        <h2 className="title-section">PROJECTS</h2>
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
                tags={project.tags}
              />
            );
          })}
        </div>
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
