import "../Assets/Styles/todayInfo.css";
import { colors } from "../Assets/colors";

function TodayInfo(props) {
  const { maxTemp, weatherStateName, locationTitle } = props;
  const { textColor } = colors;

  return (
    <div className="today" style={{ color: textColor }}>
      <p>
        <span
          style={{
            fontSize: "2rem",
            color: "#fff",
          }}
        >
          {maxTemp}
        </span>
        &nbsp;
        <sup>O</sup>C
      </p>
      <span style={{ fontSize: "1.2rem" }}>{weatherStateName}</span>
      <p style={{ fontSize: "1.2rem" }}>Today . {new Date().toDateString()}</p>
      <p
        style={{
          fontSize: "1rem",
        }}
      >
        <span className="material-icons">place</span>
        <span style={{ margin: "0 0 0 10px" }}>{locationTitle}</span>
      </p>
    </div>
  );
}

export default TodayInfo;
