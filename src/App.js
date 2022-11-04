import { useEffect, useState } from "react";
import axios from "axios";
import TodayHighlight from "./Components/TodayHighlight";
import Week from "./Components/Week";
import "./Assets/Styles/App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [todayStats, setTodayStats] = useState({
    windSpeed: 0,
    windDIrection: 0,
    rainSum: 0,
    sunRise: "",
    sunSet: "",
    radiationSum: "",
  });
  const [latitude, setLatitude] = useState(-1.1783449);
  const [longitude, setLongitude] = useState(36.936517);
  const [location, setLocation] = useState({ locality: "", country: "" });
  const [tzData, setTZData] = useState({
    timezone: "",
    timezone_abbreviation: "",
  });
  const timeZone = "auto";

  /*values returned as arrays of 7 instances*/
  const [tempMin, setTempMin] = useState([]);
  const [tempMax, setTempMax] = useState([]);
  const [weatherCode, setWeathreCode] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    /*get coordinates (request permission)*/
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });

    /*define daily wether variable*/
    const dailyWeatherParameters = [
      "apparent_temperature_min",
      "apparent_temperature_max",
      "windspeed_10m_max",
      "winddirection_10m_dominant",
      "weathercode",
      "rain_sum",
      "sunrise",
      "sunset",
      "shortwave_radiation_sum",
    ];

    /*create query string*/
    const query_params = `?latitude=${latitude}&longitude=${longitude}&daily=${dailyWeatherParameters}&current_weather=${true}&timezone=${timeZone}`;

    /*create URL with query string*/
    const url = "https://api.open-meteo.com/v1/forecast/" + query_params;

    axios
      .get(url, null)
      .then((res) => {
        setTZData({
          timezone: res.data?.timezone,
          timezone_abbreviation: res.data?.timezone_abbreviation,
        });

        setCurrentWeather(res.data?.current_weather);

        setTempMax(res.data?.daily?.apparent_temperature_max);
        setTempMin(res.data?.daily?.apparent_temperature_min);
        setDates(res.data?.daily?.time);
        setWeathreCode(res.data?.daily?.weathercode);

        setTodayStats({
          windSpeed: res.data?.daily?.windspeed_10m_max[0],
          windDIrection: res.data?.daily?.winddirection_10m_dominant[0],
          rainSum: res.data?.daily?.rain_sum[0],
          sunRise: res.data?.daily?.sunrise[0],
          sunSet: res.data?.daily?.sunset[0],
          radiationSum: res.data?.daily?.shortwave_radiation_sum[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  useEffect(() => {
    /*get location data from coordinates --> replace YOUR_API_KEY with an actual ACCESS_KEY provided by pointstack*/
    const url = `http://api.positionstack.com/v1/reverse?access_key={YOUR_API_KEY}&query=${latitude},${longitude}`;

    axios
      .get(url, null)
      .then((res) => {
        setLocation({
          locality: res.data?.data[0]?.locality,
          country: res.data?.data[0]?.country,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  return (
    <div className="app">
      <TodayHighlight
        currentWeather={currentWeather}
        locationTitle={location.locality}
        locationCountry={location.country}
        timeZoneData={tzData}
      />

      <Week
        tempMin={tempMin.slice(1)}
        tempMax={tempMax.slice(1)}
        weatherCode={weatherCode.slice(1)}
        dates={dates.slice(1)}
        windSpeed={todayStats.windSpeed}
        windDIrection={todayStats.windDIrection}
        rainSum={todayStats.rainSum}
        sunRise={todayStats.sunRise}
        sunSet={todayStats.sunSet}
        radiationSum={todayStats.radiationSum}
      />
    </div>
  );
}

export default App;
