import React, { useState, useEffect, useContext } from "react";
import { ImagesContext } from "./ImagesContex";
import "./Assets/Styles/App.css";
import Today from "./Components/Today";
import Forecast from "./Components/Forecast";

function App() {
  const [metData, setMetData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [todayData, setTodayData] = useState([]);
  const images = useContext(ImagesContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latt = position.coords.latitude;
      const long = position.coords.longitude;

      const Xhr = new XMLHttpRequest();
      Xhr.open(
        "GET",
        `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`,
        true
      );
      Xhr.onload = function () {
        if (this.status === 200) {
          const data = JSON.parse(this.response);
          setLocationData(data[0]);
          const woeid = data[0].woeid;

          const Request = new XMLHttpRequest();
          Request.open(
            "GET",
            `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`,
            true
          );
          Request.onload = function () {
            if (this.status === 200) {
              const consolidated_data = JSON.parse(this.response);
              setMetData(consolidated_data.consolidated_weather);
              setTodayData(consolidated_data.consolidated_weather[0]);
            }
          };
          Request.send();
        }
      };
      Xhr.send();
    });
  }, [setTodayData]);

  return (
    <div className="App">
      <ImagesContext.Provider value={images}>
        <Today
          locationData={locationData}
          setLocationData={setLocationData}
          setMetData={setMetData}
          todayData={todayData}
          setTodayData={setTodayData}
        />
        <Forecast metData={metData} todayData={todayData} />
      </ImagesContext.Provider>
    </div>
  );
}

export default App;
