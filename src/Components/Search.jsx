import React, { useState } from "react";

import "../Assets/Styles/Search.css";

function Search({ setMetData, setTodayData, setLocationData }) {
  const showSelect = () => {
    document.querySelector(".search_box").style.display = "block";
  };

  const hideSelect = () => {
    document.querySelector(".search_box").style.display = "none";
  };

  const [search, setSearch] = useState("");

  const searchLocation = () => {
    setSearch("");
    document.querySelector(".search_box").style.display = "none";

    const Xhr = new XMLHttpRequest();
    Xhr.open(
      "GET",
      `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${search}`,
      true
    );
    Xhr.onload = function () {
      if (this.status === 200) {
        const location_found = JSON.parse(this.responseText);
        const woeid = location_found[0].woeid;
        setLocationData(location_found[0]);

        const reQuest = new XMLHttpRequest();
        reQuest.open(
          "GET",
          `https://cors-proxy-kelvin.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`,
          true
        );
        reQuest.onload = function () {
          if (this.status === 200) {
            const consolidated_data = JSON.parse(this.response);
            setMetData(consolidated_data.consolidated_weather);
            setTodayData(consolidated_data.consolidated_weather[0]);
          }
        };
        reQuest.send();
      }
    };
    Xhr.send();
  };

  return (
    <div>
      <div className="click" onClick={showSelect}>
        <button type="button" className="btn">
          Search for places
        </button>
        <button type="button" className="icon">
          <i className="fas fa-search-location"></i>
        </button>
      </div>

      <div className="search_box">
        <p
          style={{
            float: "right",
            margin: "10px 25px",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={hideSelect}
        >
          <i className="fas fa-times"></i>
        </p>

        <form>
          <div
            style={{
              border: "1px solid #E7E7EB",
              width: "268px",
              height: "48px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <i
              className="fas fa-search"
              style={{ color: "#616475", fontSize: "20px" }}
            ></i>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search location"
            />
          </div>
          <button type="button" onClick={searchLocation}>
            SEARCH
          </button>
        </form>

        <div className="select">
          <p onClick={() => setSearch("london")}>
            London
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
          <p onClick={() => setSearch("barcelona")}>
            Barcelona
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
          <p onClick={() => setSearch("long beach")}>
            Long Beach
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
