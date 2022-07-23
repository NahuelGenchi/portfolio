import { ContactLink } from "../../components";
import { ContactInfo } from "../../components";

import "../../components/Section/Section.scss";

import "./Contact.scss";

const Contact = function () {
  return (
    <section id="contact" className="section">
      <div className="section__container">
        <div className="ci-container">
          <ContactLink href="tel:+54 11 6283-8700">
            <ContactInfo icon="call" text="+54 11 6283-8700"/>
          </ContactLink>
          <ContactLink href="mailto:nahuelgenchi@gmail.com">
            <ContactInfo icon="mail" text="nahuelgenchi@gmail.com"/>
          </ContactLink>
        </div>
        <div className="ci-container">
          <ContactLink href="https://www.linkedin.com/in/nahuel-genchi/" target="_blank">
            <ContactInfo icon="logo-linkedin" text="/nahuel-genchi" />
          </ContactLink>
          <ContactLink href="https://github.com/NahuelGenchi" target="_blank">
            <ContactInfo icon="logo-github" text="/NahuelGenchi" />
          </ContactLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;