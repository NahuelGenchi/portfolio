import { SkillBContainer, SkillsContainer, Skill } from "../../components";
import { images } from "../../constants";

import "../../components/Section/Section.scss";

import "./Skills.scss";

const Skills = function () {
  return (
    <section id="skills" className="section">
      <div className="section__container">
        <h2 className="title">Skills</h2>
        <SkillBContainer title="Internet">
          <SkillsContainer>
            <Skill title="DNS" />
            <Skill title="IP" />
            <Skill title="HTTP" />
            <Skill title="Browsers" />
            <Skill title="Domain" />
            <Skill title="Hosting" />
          </SkillsContainer>
        </SkillBContainer>
        <SkillBContainer title="Front-end Languages">
          <SkillsContainer>
            <Skill title="HTML">
              <ion-icon style={{ color: "#F16524" }} name="logo-html5"></ion-icon>
            </Skill>
            <Skill title="CSS">
              <ion-icon style={{ color: "#2465F1" }} name="logo-css3"></ion-icon>
            </Skill>
            <Skill title="JavaScript">
              <ion-icon style={{ color: "#EAD41C" }} name="logo-javascript"></ion-icon>
            </Skill>
          </SkillsContainer>
        </SkillBContainer>
        <SkillBContainer title="CSS Preprocessors">
          <SkillsContainer>
            <Skill title="SASS">
              <ion-icon style={{color: "#C76494"}} name="logo-sass"></ion-icon>
            </Skill>
          </SkillsContainer>
        </SkillBContainer>
        <SkillBContainer title="VCS & Repo hosting">
          <SkillsContainer>
            <Skill title="Git">
              <img src={images.git} alt="Git logo" />
            </Skill>
            <Skill title="GitHub">
              <ion-icon name="logo-github"></ion-icon>
            </Skill>
          </SkillsContainer>
        </SkillBContainer>
        <SkillBContainer title="Frameworks">
          <SkillsContainer>
            <Skill title="React Js">
              <ion-icon style={{color: "cyan"}} name="logo-react"></ion-icon>
            </Skill>
          </SkillsContainer>
        </SkillBContainer>
        <SkillBContainer title="Operating Systems">
          <SkillsContainer>
            <Skill title="Linux">
              <img src={images.linux} alt="Linux logo" />
            </Skill>
            <Skill title="Windows">
              <ion-icon style={{color: "#02BEE9"}} name="logo-windows"></ion-icon>
            </Skill>
          </SkillsContainer>
        </SkillBContainer>
      </div>
    </section>
  );
};

export default Skills;