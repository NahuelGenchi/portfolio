import { Navbar } from "../index";

import "./Topbar.scss";

const Topbar = function () {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-name">
          <p><ion-icon name="code-slash-outline"></ion-icon>Nahuel</p>
        </div>
        <Navbar />
        <div className="topbar-display">
          <ion-icon name="sunny-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Topbar;