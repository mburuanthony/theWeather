import { createContext } from "react";

import Clear from "./Assets/Images/Clear.png";
import Hail from "./Assets/Images/Hail.png";
import HeavyCloud from "./Assets/Images/HeavyCloud.png";
import HeavyRain from "./Assets/Images/HeavyRain.png";
import LightCloud from "./Assets/Images/LightCloud.png";
import LightRain from "./Assets/Images/LightRain.png";
import Shower from "./Assets/Images/Shower.png";
import Sleet from "./Assets/Images/Sleet.png";
import Snow from "./Assets/Images/Snow.png";
import Thunderstorm from "./Assets/Images/Thunderstorm.png";

const images = {
  clear: Clear,
  hail: Hail,
  heavyCloud: HeavyCloud,
  heavyRain: HeavyRain,
  lightCloud: LightCloud,
  lightRain: LightRain,
  shower: Shower,
  sleet: Sleet,
  snow: Snow,
  thunderStorm: Thunderstorm,
};

export const ImagesContext = createContext(images);
