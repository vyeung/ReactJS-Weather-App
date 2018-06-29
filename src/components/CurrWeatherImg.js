import React from "react";
import rain from "../assets/rain.jpg";
import thunderstorm from "../assets/thunderstorm.jpg";
import clouds from "../assets/clouds.jpg";
import clearSky from "../assets/clearSky.jpg";
import snow from "../assets/snow.jpg";
import other from "../assets/other.jpg";

const CurrWeatherImg = (props) => {
  let image = null;

  if(props.weatherId >= 200 && props.weatherId <= 232)
    image = <img src={thunderstorm} alt="unknown" />;
  if(props.weatherId >= 300 && props.weatherId <= 321)
    image = <img src={rain} alt="unknown" />;
  else if(props.weatherId >= 500 && props.weatherId <= 531)
    image = <img src={rain} alt="unknown" />;
  else if(props.weatherId >= 600 && props.weatherId <= 622)
    image = <img src={snow} alt="unknown" />;
  else if(props.weatherId >= 701 && props.weatherId <= 781)
    image = <img src={other} alt="unknown" />;
  else if(props.weatherId === 800)
    image = <img src={clearSky} alt="unknown" />;
  else if(props.weatherId >= 801 && props.weatherId <= 804)
    image = <img src={clouds} alt="unknown" />;

  return image;
}

export default CurrWeatherImg;