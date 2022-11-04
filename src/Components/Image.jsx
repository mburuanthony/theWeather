import "../Assets/Styles/Image.css";
import ClearImage from "../Assets/Images/Clear.png";
import HailImage from "../Assets/Images/Hail.png";
import HeavyRainImage from "../Assets/Images/HeavyRain.png";
import LightClodImage from "../Assets/Images/LightCloud.png";
import LightRainImage from "../Assets/Images/LightRain.png";
import ShowerImage from "../Assets/Images/Shower.png";
import SnowImage from "../Assets/Images/Snow.png";
import ThunderImage from "../Assets/Images/Thunderstorm.png";

function Image({ weathercode }) {
  return (
    <div className="weatherImage">
      <img
        src={
          weathercode >= 1 && weathercode <= 3
            ? LightClodImage
            : weathercode >= 51 && weathercode <= 55
            ? ShowerImage
            : weathercode >= 66 && weathercode <= 67
            ? HeavyRainImage
            : weathercode >= 71 && weathercode <= 75
            ? SnowImage
            : weathercode >= 80 && weathercode <= 82
            ? LightRainImage
            : weathercode >= 96
            ? HailImage
            : weathercode === 95
            ? ThunderImage
            : ClearImage
        }
        alt={weathercode}
      />
    </div>
  );
}

export default Image;
