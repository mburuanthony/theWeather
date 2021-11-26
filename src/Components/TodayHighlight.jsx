import { colors } from "../Assets/colors";
import "../Assets/Styles/todayHighlight.css";
import Search from "./Search";
import Image from "./Image";
import TodayInfo from "./TodayInfo";

function TodayHighlight(props) {
  const {
    todayData,
    locationTitle,
    setLocationTitle,
    setTodayData,
    setMetData,
  } = props;
  const { light } = colors;

  return (
    <div className="todayData" style={{ backgroundColor: light }}>
      <Search
        setLocationTitle={setLocationTitle}
        setTodayData={setTodayData}
        setMetData={setMetData}
      />
      <Image weatherStateName={todayData?.weather_state_name} />
      <TodayInfo
        maxTemp={Math.round(todayData?.max_temp)}
        weatherStateName={todayData?.weather_state_name}
        locationTitle={locationTitle}
      />
    </div>
  );
}

export default TodayHighlight;
