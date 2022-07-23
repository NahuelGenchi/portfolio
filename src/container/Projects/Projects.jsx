import { ProjectContainer } from "../../components";
import { images } from "../../constants";

import "../../components/Section/Section.scss";

import "./Projects.scss";

const Projects = function () {
  return (
    <section id="projects" className="section">
      <div className="section__container">
        <h2 className="title">Projects</h2>
        <div className="projects-container">
          <ProjectContainer imglink={images.notesimg} alt="Notes App picture" host="https://nahuelgenchi.github.io/notes/" github="https://github.com/NahuelGenchi/notes.git" title="Notes App" desc="In this note app, users can easily add, edit, or delete their notes. The notes that has been added to this app will be stored in the browser's local storage so, they won't remove on page refresh or tab close."/>
          <ProjectContainer imglink={images.devinfo} alt="Dev Info picture" host="https://nahuelgenchi.github.io/devinfo/" github="https://github.com/NahuelGenchi/devinfo.git" title="DevInfo" desc="DevInfo is an app that I created for development shortcuts. Here I can find resources from Git, SASS and Google Fonts."/>
        </div>
      </div>
    </section>
  );
};

export default Projects;