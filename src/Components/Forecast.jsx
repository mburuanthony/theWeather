import React, { useContext } from "react";
import { ImagesContext } from "../ImagesContex";

import "../Assets/Styles/Forecast.css";

function Forecast({ metData, todayData }) {
  const Images = useContext(ImagesContext);
  const week_data = metData.slice(1);

  return (
    <div className="forecast">
      <div className="week">
        {week_data.map((data) => (
          <div className="met_data" key={data.id}>
            <p>{data.applicable_date}</p>
            <div className="icons" style={{ width: "100%" }}>
              <img
                src={
                  data.weather_state_name === "Heavy Cloud"
                    ? Images.heavyCloud
                    : data.weather_state_name === "Showers"
                    ? Images.shower
                    : data.weather_state_name === "Snow"
                    ? Images.snow
                      ? data.weather_state_name === "Sleet"
                        ? Images.sleet
                        : data.weather_state_name === "Hail"
                      : Images.hail
                    : data.weather_state_name === "Thunderstorm"
                    ? Images.thunderStorm
                    : data.weather_state_name === "Heavy Rain"
                    ? Images.heavyRain
                    : data.weather_state_name === "Light Rain"
                    ? Images.lightRain
                    : data.weather_state_name === "Light Cloud"
                    ? Images.lightCloud
                    : Images.clear
                }
                alt=""
              />
            </div>
            <div className="temp">
              <p style={{ color: "#E7E7EB" }}>
                {Math.round(data.max_temp)}
                <span>
                  <sup>O</sup>C
                </span>
              </p>
              <p style={{ color: "#A09FB1" }}>
                {Math.round(data.min_temp)}
                <span>
                  <sup>O</sup>C
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="highlights">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Today's Highlights
        </p>

        <div id="todayData">
          <div className="wind">
            <p>Wind status</p>
            <p style={{ fontSize: "24px" }}>
              {Math.round(todayData.wind_speed)} mph
            </p>
            <p>
              <i
                className="fas fa-location-arrow"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "500px",
                  background: "rgba(255, 255, 255, 0.3)",
                  color: "#E7E7EB",
                  fontSize: "20px",
                  padding: "8px",
                  transform: `rotate${todayData.wind_direction}deg`,
                }}
              ></i>
              &nbsp;
              <span style={{ fontSize: "20px" }}>
                {todayData.wind_direction_compass}
              </span>
            </p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p style={{ fontSize: "24px" }}>
              {Math.round(todayData.humidity)}%
            </p>
            <div className="progress">
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "fit-content",
                }}
              >
                <span>0</span> <span>50</span> <span>100</span>
              </p>

              <progress
                value={Math.round(todayData.humidity)}
                max="100"
              ></progress>
              <br />
              <small style={{ float: "right" }}>%</small>
            </div>
          </div>
          <div className="visibility">
            <p>Visibility</p>
            <p style={{ fontSize: "38px" }}>
              {Math.round(todayData.visibility)} miles
            </p>
          </div>
          <div className="air_preesure">
            <p>Air Pressure</p>
            <p style={{ fontSize: "38px" }}>
              {Math.round(todayData.air_pressure)} mb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
