import { ProjectContainer } from "../../components";

import "../../components/Section/Section.scss";

import "./Projects.scss";

const Projects = function () {
  return (
    <section id="projects" className="section">
      <div className="section__container">
        <h2 className="title">Projects</h2>
        <div className="projects-container">
          <ProjectContainer icon="document-text" iconcolor="#FFE278" host="https://nahuelgenchi.github.io/notes/" github="https://github.com/NahuelGenchi/notes.git" title="Notes App" desc="In this note app, users can easily add, edit, or delete their notes. The notes that has been added to this app will be stored in the browser's local storage so, they won't remove on page refresh or tab close."/>
          <ProjectContainer icon="checkbox" iconcolor="#89E289" host="https://nahuelgenchi.github.io/tdlistb/" github="https://github.com/NahuelGenchi/tdlistb.git" title="To-Do List" desc="In this To-Do List you can add, delete and mark tasks as done. The tasks are stored in the local storage of the browser so the tasks won't be lost after refreshing the page." />
          <ProjectContainer icon="swap-horizontal" iconcolor="white" host="https://nahuelgenchi.github.io/unitconverter/" github="https://github.com/NahuelGenchi/unitconverter.git" title="Unit Conversion" desc="In this app you can convert meters, feet, liters, gallons, kilos and pounds into their respective opposite metric/imperial unit." />
          <ProjectContainer icon="terminal" iconcolor="#314559" host="https://nahuelgenchi.github.io/devinfo/" github="https://github.com/NahuelGenchi/devinfo.git" title="DevInfo" desc="DevInfo is an app that I created for development shortcuts. Here I can find resources from Git, SASS and Google Fonts."/>
          <ProjectContainer icon="telescope" iconcolor="gray" host="https://nahuelgenchi.github.io/mars/" github="https://github.com/NahuelGenchi/mars.git" title="Mars Facts" desc="This was my first project since I started to learn front-end, it is an HTML-only website where you can find facts about the planet Mars. Never forget where you come from."/>
        </div>
      </div>
    </section>
  );
};

export default Projects;