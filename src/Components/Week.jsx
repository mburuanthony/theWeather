import { colors } from "../Assets/colors";
import "../Assets/Styles/week.css";
import WeekItem from "./WeekItem";
import TodayStats from "./TodayStats";

function Week(props) {
  const { weekData, todayData } = props;
  const { dark } = colors;

  return (
    <div className="weekData" style={{ backgroundColor: dark }}>
      <div id="top">
        {weekData.map((item) => (
          <WeekItem
            key={item?.id}
            date={item?.applicable_date}
            weatherStateName={item?.weather_state_name}
            maxTemp={item?.max_temp}
            minTemp={item?.min_temp}
          />
        ))}
      </div>

      <TodayStats todayData={todayData} />
    </div>
  );
}

export default Week;
