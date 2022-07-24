import "../../components/Section/Section.scss";

import "./About.scss";

const About = function () {
  return (
    <section id="about" className="section">
      <div className="section__container">
        <h2 className="title">About me</h2>
        <p>My name is Nahuel Genchi and I'm from Buenos Aires, Argentina. I'm a passionate Front-End learner who is looking for his first job as a developer. I learned Front-End technologies on Coderhouse, where I'm currently studying React. Besides that, I'm constantly learning new things on platforms like freeCodeCamp and MDN Web Docs.</p>
        <p>My next career goal is to start studying Computer Engineering at <abbr title="Universidad Nacional de Tres de Febrero">UNTREF</abbr>.</p>
        <p>I'm currently working as an IT Support Technician at Nautec, which is an IT Services company.</p>
      </div>
    </section>
  );
};

export default About;