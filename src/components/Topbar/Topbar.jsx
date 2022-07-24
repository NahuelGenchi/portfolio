import { Navbar } from "../index";

import "./Topbar.scss";

const Topbar = function () {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-name">
          <p>Nahuel</p>
        </div>
        <Navbar />
        <div className="topbar-display">
          <ion-icon name="logo-react"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Topbar;