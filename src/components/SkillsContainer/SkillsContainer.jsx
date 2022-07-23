import "./SkillsContainer.scss";

const SkillsContainer = function(props) {
  return (
    <div className="skills-container">
      {props.children}
    </div>
  );
};

export default SkillsContainer;