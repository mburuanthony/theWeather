import { colors } from "../Assets/colors";
import "../Assets/Styles/todayInfo.css";

function TodayInfo({
  maxTemp,
  locationTitle,
  locationCountry,
  timeZone,
  timeZoneAbbr,
}) {
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
          {maxTemp || 0}
        </span>
        &nbsp;
        <sup>O</sup>C
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        Today
        <span style={{ margin: "0 10px 0 10px", fontSize: "1.85rem" }}>.</span>
        {new Date().toDateString()}
      </p>
      <p
        style={{
          fontSize: "1rem",
        }}
      >
        <span style={{ marginLeft: "10px" }}>{timeZone || "Nairobi"}</span>
        <span style={{ marginLeft: "10px", fontSize: "1.85rem" }}>.</span>
        <span style={{ marginLeft: "10px" }}>{timeZoneAbbr || "Kenya"}</span>
      </p>
      <p
        style={{
          fontSize: "1rem",
        }}
      >
        <span className="material-icons">place</span>
        <span style={{ marginLeft: "10px" }}>{locationTitle || "Nairobi"}</span>
        <span style={{ marginLeft: "10px", fontSize: "1.85rem" }}>.</span>
        <span style={{ marginLeft: "10px" }}>{locationCountry || "Kenya"}</span>
      </p>
    </div>
  );
}

export default TodayInfo;
