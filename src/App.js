import { useEffect, useState } from "react";
import TodayHighlight from "./Components/TodayHighlight";
import Week from "./Components/Week";
import axios from "axios";
import "./Assets/Styles/App.css";

function App() {
  const [metData, setMetData] = useState([]);
  const [todayData, setTodayData] = useState();
  const [latitude, setLatitude] = useState(Number());
  const [longitude, setLongitude] = useState(Number());
  const [woeid, setWoeid] = useState(44418);
  const [locationTitle, setLocationTitle] = useState("Nairobi");

  useEffect(() => {
    // get coordinates
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });

    // get WOEID
    const getWoeid = async () =>
      await axios
        .get(
          `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}/`
        )
        .then((res) => {
          setWoeid(res?.data[0]?.woeid);
          setLocationTitle(res?.data[0]?.title);
        })
        .catch((err) => {
          console.log(err);
        });

    // get weather data
    const getWetaherData = async () =>
      await axios
        .get(
          `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
        )
        .then((res) => {
          setMetData(res?.data?.consolidated_weather);
          setTodayData(res?.data?.consolidated_weather[0]);
        })
        .catch((err) => {
          console.log(err);
        });

    getWoeid();
    getWetaherData();
  }, [latitude, longitude, woeid]);

  return (
    <div className="app">
      <TodayHighlight
        todayData={todayData}
        locationTitle={locationTitle}
        setLocationTitle={setLocationTitle}
        setTodayData={setTodayData}
        setMetData={setMetData}
      />
      <Week weekData={metData.slice(1)} todayData={todayData} />
    </div>
  );
}

export default App;
