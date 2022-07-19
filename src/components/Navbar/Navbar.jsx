import "./Navbar.scss";

const Navbar = function() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" alt="nav icon">
            <ion-icon name="home-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#home" alt="nav icon">
            <ion-icon name="person-circle-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#home" alt="nav icon">
            <ion-icon name="briefcase-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#home" alt="nav icon">
            <ion-icon name="code-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#home" alt="nav icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;