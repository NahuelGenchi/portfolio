import { FontColor } from "../../components";

import "./Header.scss";

const Header = function () {
  return (
    <header className="header" id="home">
      <div className="header__container">
        <div className="header__supcontainer-info">
          <div className="header__container-info">
            <p className="header__container-info-wel">Welcome to my portfolio</p>
            <h1>Nahuel <FontColor color="#00BFFF" textContent="Genchi" /></h1>
            <p className="header__container-info-sub">Front-end Developer - Buenos Aires, Argentina</p>
          </div>
          <div className="header__container-dec"></div>
        </div>
      </div>
    </header>
  );
};

export default Header