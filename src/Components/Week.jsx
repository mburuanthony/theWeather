import WeekItem from "./WeekItem";
import TodayStats from "./TodayStats";
import { colors } from "../Assets/colors";
import "../Assets/Styles/week.css";

function Week({
  tempMin,
  tempMax,
  weatherCode,
  dates,
  windSpeed,
  windDIrection,
  rainSum,
  sunRise,
  sunSet,
  radiationSum,
}) {
  const { dark } = colors;

  return (
    <div className="weekData" style={{ backgroundColor: dark }}>
      <div id="top">
        {tempMin?.map((item, index) => (
          <WeekItem
            key={index}
            date={dates[index]}
            weathercode={weatherCode[index]}
            maxTemp={tempMax[index]}
            minTemp={tempMin[index]}
          />
        ))}
      </div>

      <TodayStats
        windSpeed={windSpeed}
        windDIrection={windDIrection}
        rainSum={rainSum}
        sunRise={sunRise}
        sunSet={sunSet}
        radiationSum={radiationSum}
      />
    </div>
  );
}

export default Week;
