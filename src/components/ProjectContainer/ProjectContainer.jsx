import "./ProjectContainer.scss";

const ProjectContainer = function (props) {
  return (
    <div className="project-container">
      <img src={props.imglink} alt={props.alt} className="project-container-img" />
      <div className="pc-info">
        <div className="pc-info-text">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <div className="pc-info-assets">
          <div className="pc-technologies-container">
          </div>
          <div className="pc-button-container">
            <a href={props.host} target="_blank" rel="noreferrer">
              <ion-icon name="link-outline"></ion-icon>
              <span>Visit</span>
            </a>
            <a href={props.github} target="_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;