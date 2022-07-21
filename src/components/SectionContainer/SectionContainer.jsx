import "./SectionContainer.scss";

const SectionContainer = function(props) {
  return (
    <section id={props.id} className="section">
      <div className="section__container">
        <h2 className="title">{props.title}</h2>
      </div>
    </section>
  );
}

export default SectionContainer;