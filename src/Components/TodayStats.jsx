import { colors } from "../Assets/colors";
import "../Assets/Styles/week.css";

function TodayStats({
  windSpeed,
  windDIrection,
  rainSum,
  sunRise,
  sunSet,
  radiationSum,
}) {
  // const { todayData } = props;
  const { fontColor } = colors;

  const spanStyle = {
    margin: "0 6px 0 0",
    fontSize: "2.22rem",
  };

  return (
    <div className="todayStats" style={{ color: fontColor }}>
      <p style={{ margin: "0 0 20px 0", fontSize: "1.5rem" }}>
        Today's Highlights
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <div id="windStatus">
          <p>Wind status</p>
          <p>
            <span style={spanStyle}>{Math.round(windSpeed) || 0}</span>
            km/h
          </p>
          <p>
            <span
              className="material-icons"
              style={{
                borderRadius: 500,
                margin: "0 6px 0 0",
                padding: "2px",
                transform: `rotate(${windDIrection}deg)`,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
              }}
            >
              navigation
            </span>
          </p>
        </div>

        <div id="humidity">
          <p>Rain</p>
          <p>
            <span style={spanStyle}>{Math.round(rainSum) || 0}</span>
            mm
          </p>
        </div>

        <div id="visibility">
          <p>
            <span>Sunsrise</span>
            <br />
            <span>
              {`${new Date(sunRise).getHours()} : ${new Date(
                sunRise
              ).getMinutes()}` || ""}
            </span>
          </p>
          <p>
            <span>Sunset</span>
            <br />
            <span>
              {`${new Date(sunSet).getHours()} : ${new Date(
                sunSet
              ).getMinutes()}` || ""}
            </span>
          </p>
        </div>

        <div id="airPressure">
          <p>Solar Radiation</p>
          <p>
            <span style={spanStyle}>{Math.round(radiationSum) || 0}</span>
            MJ/m²
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodayStats;
