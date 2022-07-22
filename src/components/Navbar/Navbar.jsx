import NavbarItem from "../NavbarItem/NavbarItem";

import "./Navbar.scss";

const Navbar = function () {
  return (
    <>
      <nav className="navbar" id="navbar-desktop">
        <ul>
          <NavbarItem link="#home" ionicon="home-outline"  alt="Home"/>
          <NavbarItem link="#about" ionicon="person-circle-outline"  alt="About"/>
          <NavbarItem link="#projects" ionicon="briefcase-outline"  alt="Projects"/>
          <NavbarItem link="#technologies" ionicon="code-outline"  alt="Technologies"/>
          <NavbarItem link="#contact" ionicon="mail-outline"  alt="Contact"/>
        </ul>
      </nav>
      <nav className="navbar" id="navbar-mobile">
        <ul>
          <NavbarItem link="#home" ionicon="home-outline" alt="Home"/>
          <NavbarItem link="#about" ionicon="person-circle-outline" alt="About"/>
          <NavbarItem link="#projects" ionicon="briefcase-outline" alt="Projects"/>
          <NavbarItem link="#technologies" ionicon="code-outline" alt="Technologies"/>
          <NavbarItem link="#contact" ionicon="mail-outline" alt="Contact"/>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;