import "./Skill.scss";

const Skill = function(props) {
  return(
    <div className="skill">
      {props.children}
      <span className="skill-title">{props.title}</span>
    </div>
  );
};

export default Skill;