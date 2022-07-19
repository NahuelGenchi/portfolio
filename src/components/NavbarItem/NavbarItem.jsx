import "./NavbarItem.scss";

const NavbarItem = function(props) {
  return (
    <li>
      <a href={props.link}>
        <ion-icon name={props.ionicon}></ion-icon>
      </a>
    </li>
  );
};

export default NavbarItem;