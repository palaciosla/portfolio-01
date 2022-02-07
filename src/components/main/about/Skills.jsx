import React from "react";

let skills = [
  {
    id: "HTML",
    icon: "https://img.icons8.com/color/452/html-5--v1.png",
  },
  {
    id: "CSS",
    icon: "https://img.icons8.com/color/344/css3.png",
  },
  {
    id: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    id: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  //   {
  //     id: "TypeScript",
  //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  //   },
  //   {
  //     id: "Redux",
  //     icon: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
  //   },
  //   {
  //       "id": "GitHub",
  //       "icon": "https://img.icons8.com/stickers/344/github.png"
  //   }
];

let tools = [
  {
    id: "Axios",
    icon: "https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png",
  },

  {
    id: "Redux",
    icon: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
  },
  {
    id: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: "React Router",
    icon: "https://iconape.com/wp-content/files/sm/371377/svg/371377.svg",
  },
  {
    id: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },

  {
    id: "Styled Components",
    icon: "https://styled-components.com/logo.png",
  },
  {
    id: "SASS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skill-icons">
          <h3>Skills</h3>
          <div className="skills-icons__container">
            {skills.map((tecno) => {
              return (
                <div key={tecno.id}>
                  <img src={tecno.icon} alt={tecno.id} className="skill-icon" />
                  <p>{tecno.id}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills">
          <div className="skill-icons tools">
            <h3>Tools</h3>
            <div className="skills-icons__container tools-container">
              {tools.map((tecno) => {
                return (
                  <div key={tecno.id}>
                    <img
                      src={tecno.icon}
                      alt={tecno.id}
                      className="skill-icon"
                    />
                    <p>{tecno.id}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
