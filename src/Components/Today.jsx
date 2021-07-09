import React, { useContext } from "react";
import Search from "./Search";
import { ImagesContext } from "../ImagesContex";

import "../Assets/Styles/Today.css";
import bgImage from "../Assets/Images/Cloud-background.png";

function Today({ setMetData, locationData, todayData }) {
  const Images = useContext(ImagesContext);

  return (
    <div className="today">
      <Search setMetData={setMetData} />

      <div
        className="background"
        style={{
          margin: "0",
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          padding: "10px",
          width: "100%",
          height: "350px",
          opacity: "0.3",
          textAlign: "center",
        }}
      ></div>

      <div
        id="today_icon"
        style={{
          position: "absolute",
          left: "100px",
          top: "191px",
          width: "202px",
          height: "234px",
        }}
      >
        <img
          style={{ opacity: "1", zIndex: "1000" }}
          src={
            todayData.weather_state_name === "Heavy Cloud"
              ? Images.heavyCloud
              : todayData.weather_state_name === "Showers"
              ? Images.shower
              : todayData.weather_state_name === "Snow"
              ? Images.snow
                ? todayData.weather_state_name === "Sleet"
                  ? Images.sleet
                  : todayData.weather_state_name === "Hail"
                : Images.hail
              : todayData.weather_state_name === "Thunderstorm"
              ? Images.thunderStorm
              : todayData.weather_state_name === "Heavy Rain"
              ? Images.heavyRain
              : todayData.weather_state_name === "Light Rain"
              ? Images.lightRain
              : todayData.weather_state_name === "Light Cloud"
              ? Images.lightCloud
              : Images.clear
          }
          alt=""
        />
      </div>

      <div
        id="today_deg"
        style={{
          fontSize: "24px",
          color: "#E7E7EB",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#E7E7EB", fontSize: "28px" }}>
          {Math.round(todayData.max_temp)} <sup>0</sup>C
        </p>

        <p style={{ fontWeight: "bold", margin: "40px 0", color: "#A09FB1" }}>
          {todayData.weather_state_name}
        </p>

        <p style={{ color: "#88869D" }}>
          <span>Today</span>
          <i style={{ fontWeight: "bold", margin: "0 20px" }}>.</i>
          <span>{todayData.applicable_date}</span>
        </p>

        <p style={{ margin: "60px 0", color: "#88869D" }}>
          <i className="fas fa-map-marker-alt" style={{ margin: "0 4px" }}></i>
          &nbsp;
          {locationData.title}
        </p>
      </div>
    </div>
  );
}

export default Today;
