import "./Topbar.scss";

let displayValue = "dark";

function displayChange() {
  if (displayValue === "dark") {
    displayValue = "light";
  } else if (displayValue === "light") {
    displayValue = "dark";
  };
  console.log(displayValue);
};

const Topbar = function() {
  return (
    <div className="topbar">
      <div className="topbar-name">
        <p>Nahuel</p>
      </div>
      <div
        className="topbar-display"
        onClick={displayChange}
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