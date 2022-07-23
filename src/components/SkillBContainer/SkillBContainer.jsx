import "./SkillBContainer.scss";

const SkillBContainer = function(props) {
  return(
    <div className="skill-bcontainer">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default SkillBContainer;