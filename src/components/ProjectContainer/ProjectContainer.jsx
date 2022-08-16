import projectsData from "../../mock/data";

import "./ProjectContainer.scss";

const ProjectContainer = () => {
  return (
    <>
      {projectsData.map((project, index) => {
        return (
          <div className="project-container" key={index}>
            <div className="pc-picture">
              <ion-icon name={project.iconName} style={{ color: project.iconColor }}></ion-icon>
            </div>
            <div className="pc-info">
              <div className="pc-info-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="pc-info-assets">
                <div className="pc-technologies-container">
                </div>
                <div className="pc-button-container">
                  <a href={project.hostLink} target="_blank" rel="noreferrer">
                    <ion-icon name="link-outline"></ion-icon>
                    <span>Visit</span>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectContainer;