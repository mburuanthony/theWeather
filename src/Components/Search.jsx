import { useState, useRef } from "react";
import { colors } from "../Assets/colors";
import "../Assets/Styles/search.css";
import axios from "axios";

function Search(props) {
  const { setLocationTitle, setTodayData, setMetData } = props;
  const { btnBackground, boxShadow, light } = colors;

  const [searchVal, setSearchVal] = useState("");
  const [locationWoeid, setLocationWoeid] = useState(44418);
  const formRef = useRef(null);

  async function submitSearch(e) {
    e.preventDefault();

    // get WOEID
    await axios
      .get(
        `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchVal}`
      )
      .then((res) => {
        setLocationTitle(res?.data[0]?.title);
        setLocationWoeid(res?.data[0]?.woeid);
      })
      .catch((err) => {
        console.log(err);
      });

    // get location weather data... set today data... set met data
    await axios
      .get(
        `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/${locationWoeid}/`
      )
      .then((res) => {
        console.log(res);
        setTodayData(res?.data?.consolidated_weather[0]);
        setMetData(res?.data?.consolidated_weather);
        formRef.current.style.display = "none";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="search_location">
      <div className="search_top">
        <button
          style={{ background: btnBackground, boxShadow: boxShadow }}
          onClick={() => (formRef.current.style.display = "block")}
        >
          Search Location
        </button>
        <span
          className="material-icons"
          style={{
            padding: "4px",
            border: 0,
            borderRadius: 500,
            boxShadow: boxShadow,
            background: btnBackground,
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => (formRef.current.style.display = "block")}
        >
          my_location
        </span>
      </div>

      <form style={{ background: light }} ref={formRef} onSubmit={submitSearch}>
        <span onClick={() => (formRef.current.style.display = "none")}>
          &times;
        </span>
        <input
          type="text"
          placeholder="Search location"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
