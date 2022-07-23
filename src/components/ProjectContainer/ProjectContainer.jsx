import "./ProjectContainer.scss";

const ProjectContainer = function (props) {
  const iconcolor = props.iconcolor;
  return (
    <div className="project-container">
      <div className="pc-picture">
        <ion-icon name={props.icon} style={{color: iconcolor }}></ion-icon>
      </div>
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