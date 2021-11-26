import "../Assets/Styles/Image.css";
import ClearImage from "../Assets/Images/Clear.png";
import HailImage from "../Assets/Images/Clear.png";
import HeavyCloudImage from "../Assets/Images/HeavyCloud.png";
import HeavyRainImage from "../Assets/Images/HeavyRain.png";
import LightClodImage from "../Assets/Images/LightCloud.png";
import LightRainImage from "../Assets/Images/LightRain.png";
import ShowerImage from "../Assets/Images/Shower.png";
import SleetImage from "../Assets/Images/Sleet.png";
import SnowImage from "../Assets/Images/Snow.png";
import ThunderImage from "../Assets/Images/Thunderstorm.png";

function Image(props) {
  const { weatherStateName } = props;

  return (
    <div className="weatherImage">
      <img
        src={
          weatherStateName === "Heavy Cloud"
            ? HeavyCloudImage
            : weatherStateName === "Showers"
            ? ShowerImage
            : weatherStateName === "Snow"
            ? SnowImage
              ? weatherStateName === "Sleet"
                ? SleetImage
                : weatherStateName === "Hail"
              : HailImage
            : weatherStateName === "Thunderstorm"
            ? ThunderImage
            : weatherStateName === "Heavy Rain"
            ? HeavyRainImage
            : weatherStateName === "Light Rain"
            ? LightRainImage
            : weatherStateName === "Light Cloud"
            ? LightClodImage
            : ClearImage
        }
        alt={weatherStateName}
      />
    </div>
  );
}

export default Image;
