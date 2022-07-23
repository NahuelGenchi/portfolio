const ContactInfo = function (props) {
  return (
    <>
      <ion-icon name={props.icon}></ion-icon>
      <span className="ci-span">{props.text}</span>
    </>
  );
};

export default ContactInfo;