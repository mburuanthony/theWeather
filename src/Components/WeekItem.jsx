import "../Assets/Styles/week.css";
import { colors } from "../Assets/colors";
import Image from "./Image";

function WeekItem(props) {
  const { date, weatherStateName, maxTemp, minTemp } = props;
  const { light, fontColor } = colors;

  return (
    <div
      className="weekItem"
      style={{ backgroundColor: light, color: fontColor }}
    >
      <p>{new Date(date).toDateString()}</p>
      <div className="img_container">
        <Image weatherStateName={weatherStateName} />
      </div>
      <p style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span>
          {Math.round(maxTemp)} <sup>O</sup>C
        </span>
        <span>
          {Math.round(minTemp)} <sup>O</sup>C
        </span>
      </p>
    </div>
  );
}

export default WeekItem;
