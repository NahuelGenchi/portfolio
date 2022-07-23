import "./ContactLink.scss";

const ContactLink = function(props) {
  return (
    <div className="contact-info-container">
      <a {...props}>
        {props.children}
      </a>
    </div>
  );
};

export default ContactLink;