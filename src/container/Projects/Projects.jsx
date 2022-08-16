import { ProjectContainer } from "../../components";

import "../../components/Section/Section.scss";

import "./Projects.scss";

const Projects = function () {
  return (
    <section id="projects" className="section">
      <div className="section__container">
        <h2 className="title">Projects</h2>
        <div className="projects-container">
          <ProjectContainer/>
        </div>
      </div>
    </section>
  );
};

export default Projects;