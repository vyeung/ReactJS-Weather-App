import React from "react";
import rain from "../assets/CurrentWeatherPics/rain.jpg";
import thunderstorm from "../assets/CurrentWeatherPics/thunderstorm.jpg";
import clouds from "../assets/CurrentWeatherPics/clouds.jpg";
import clearSky from "../assets/CurrentWeatherPics/clearSky.jpg";
import snow from "../assets/CurrentWeatherPics/snow.jpg";
import other from "../assets/CurrentWeatherPics/other.jpg";

const CurrWeatherImg = (props) => {
  let image = null;

  if(props.weatherId >= 200 && props.weatherId <= 232)
    image = <img className="WeatherImg" src={thunderstorm} alt="unknown" />;
  if(props.weatherId >= 300 && props.weatherId <= 321)
    image = <img className="WeatherImg" src={rain} alt="unknown" />;
  else if(props.weatherId >= 500 && props.weatherId <= 531)
    image = <img className="WeatherImg" src={rain} alt="unknown" />;
  else if(props.weatherId >= 600 && props.weatherId <= 622)
    image = <img className="WeatherImg" src={snow} alt="unknown" />;
  else if(props.weatherId >= 701 && props.weatherId <= 781)
    image = <img className="WeatherImg" src={other} alt="unknown" />;
  else if(props.weatherId === 800)
    image = <img className="WeatherImg" src={clearSky} alt="unknown" />;
  else if(props.weatherId >= 801 && props.weatherId <= 804)
    image = <img className="WeatherImg" src={clouds} alt="unknown" />;

  return image;
}

export default CurrWeatherImg;