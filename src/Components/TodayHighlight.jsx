import Image from "./Image";
import TodayInfo from "./TodayInfo";
import { colors } from "../Assets/colors";
import "../Assets/Styles/todayHighlight.css";

function TodayHighlight({
  currentWeather,
  locationTitle,
  locationCountry,
  timeZoneData,
}) {
  const { light } = colors;

  return (
    <div className="todayData" style={{ backgroundColor: light }}>
      <Image weathercode={currentWeather?.weathercode} />

      <TodayInfo
        maxTemp={Math.round(currentWeather?.temperature)}
        locationTitle={locationTitle}
        locationCountry={locationCountry}
        timeZone={timeZoneData.timezone}
        timeZoneAbbr={timeZoneData.timezone_abbreviation}
      />
    </div>
  );
}

export default TodayHighlight;
