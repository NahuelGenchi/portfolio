import "./FontColor.scss";

const FontColor = function(props) {
  return (
    <span style={{color: `${props.color}`}}>{props.textContent}</span>
  )
};

export default FontColor;