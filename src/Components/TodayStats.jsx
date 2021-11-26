import "../Assets/Styles/week.css";
import { colors } from "../Assets/colors";

function TodayStats(props) {
  const { todayData } = props;
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
            <span style={spanStyle}>{Math.round(todayData?.wind_speed)}</span>
            mph
          </p>
          <p>
            <span
              className="material-icons"
              style={{
                borderRadius: 500,
                margin: "0 6px 0 0",
                padding: "2px",
                transform: `rotate(${todayData?.wind_direction}deg)`,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
              }}
            >
              navigation
            </span>
            {todayData?.wind_direction_compass}
          </p>
        </div>

        <div id="humidity">
          <p>Humidity</p>
          <p>
            <span style={spanStyle}>{Math.round(todayData?.humidity)}</span>%
          </p>
          <p
            style={{
              width: "90%",
              margin: "0 auto",
              paddin: 0,
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </p>
          <progress
            max={100}
            value={Math.round(todayData?.humidity)}
          ></progress>
        </div>

        <div id="visibility">
          <p>Visibility</p>
          <p>
            <span style={spanStyle}>{Math.round(todayData?.visibility)}</span>
            miles
          </p>
        </div>

        <div id="airPressure">
          <p>Air Pressure</p>
          <p>
            <span style={spanStyle}>{Math.round(todayData?.air_pressure)}</span>
            mb
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodayStats;
