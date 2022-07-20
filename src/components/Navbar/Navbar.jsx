import NavbarItem from "../NavbarItem/NavbarItem";

import "./Navbar.scss";

const Navbar = function() {
  return (
    <nav className="navbar">
      <ul>
        <NavbarItem link="#home" ionicon="home-outline" />
        <NavbarItem link="#about" ionicon="person-circle-outline" />
        <NavbarItem link="#projects" ionicon="briefcase-outline" />
        <NavbarItem link="#technologies" ionicon="code-outline" />
        <NavbarItem link="#contact" ionicon="mail-outline" />
      </ul>
    </nav>
  );
};

export default Navbar;