import "./Topbar.scss";

const Topbar = function() {
  return (
    <div className="topbar">
      <div className="topbar-name">
        <p>Nahuel</p>
      </div>
      <div
        className="topbar-display"
      >
        <ion-icon
          name="sunny-outline"
        >
        </ion-icon>
      </div>
    </div>
  );
};

export default Topbar;