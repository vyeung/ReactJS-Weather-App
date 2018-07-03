import React from "react";
import "./FiveDayForecast.css";

import clearDay from "../assets/SingleForecastPics/clearDay.png";
import clearNight from "../assets/SingleForecastPics/clearNight.png";
import partlyCloudyDay from "../assets/SingleForecastPics/partlyCloudyDay.png";
import partlyCloudyNight from "../assets/SingleForecastPics/partlyCloudyNight.png";
import allCloudy from "../assets/SingleForecastPics/allCloudy.png";
import rain from "../assets/SingleForecastPics/rain.png";
import tStorm from "../assets/SingleForecastPics/tStorm.png";
import snow from "../assets/SingleForecastPics/snow.png";
import other from "../assets/SingleForecastPics/other.png";

const FiveDayForecast = (props) => {

  let forecastImg1 = null;
  if(props.day1Forecast.icon === "01d")
    forecastImg1 = clearDay;
  else if(props.day1Forecast.icon === "01n")
    forecastImg1 = clearNight;
  else if(props.day1Forecast.icon === "02d")
    forecastImg1 = partlyCloudyDay;
  else if(props.day1Forecast.icon === "02n")
    forecastImg1 = partlyCloudyNight;
  else if(props.day1Forecast.icon === "03d" || props.day1Forecast.icon === "04d" || props.day1Forecast.icon === "03n" || props.day1Forecast.icon === "04n")
    forecastImg1 = allCloudy;
  else if(props.day1Forecast.icon === "09d" || props.day1Forecast.icon === "10d" || props.day1Forecast.icon === "09n" || props.day1Forecast.icon === "10n")
    forecastImg1 = rain;
  else if(props.day1Forecast.icon === "11d" || props.day1Forecast.icon === "11n")
    forecastImg1 = tStorm;
  else if(props.day1Forecast.icon === "13d" || props.day1Forecast.icon === "13n")
    forecastImg1 = snow;
  else if(props.day1Forecast.icon === "50d" || props.day1Forecast.icon === "50n")
    forecastImg1 = other;

  let forecastImg2 = null;
  if(props.day2Forecast.icon === "01d")
    forecastImg2 = clearDay;
  else if(props.day2Forecast.icon === "01n")
    forecastImg2 = clearNight;
  else if(props.day2Forecast.icon === "02d")
    forecastImg2 = partlyCloudyDay;
  else if(props.day2Forecast.icon === "02n")
    forecastImg2 = partlyCloudyNight;
  else if(props.day2Forecast.icon === "03d" || props.day2Forecast.icon === "04d" || props.day2Forecast.icon === "03n" || props.day2Forecast.icon === "04n")
    forecastImg2 = allCloudy;
  else if(props.day2Forecast.icon === "09d" || props.day2Forecast.icon === "10d" || props.day2Forecast.icon === "09n" || props.day2Forecast.icon === "10n")
    forecastImg2 = rain;
  else if(props.day2Forecast.icon === "11d" || props.day2Forecast.icon === "11n")
    forecastImg2 = tStorm;
  else if(props.day2Forecast.icon === "13d" || props.day2Forecast.icon === "13n")
    forecastImg2 = snow;
  else if(props.day2Forecast.icon === "50d" || props.day2Forecast.icon === "50n")
    forecastImg2 = other;

  let forecastImg3 = null;
  if(props.day3Forecast.icon === "01d")
    forecastImg3 = clearDay;
  else if(props.day3Forecast.icon === "01n")
    forecastImg3 = clearNight;
  else if(props.day3Forecast.icon === "02d")
    forecastImg3 = partlyCloudyDay;
  else if(props.day3Forecast.icon === "02n")
    forecastImg3 = partlyCloudyNight;
  else if(props.day3Forecast.icon === "03d" || props.day3Forecast.icon === "04d" || props.day3Forecast.icon === "03n" || props.day3Forecast.icon === "04n")
    forecastImg3 = allCloudy;
  else if(props.day3Forecast.icon === "09d" || props.day3Forecast.icon === "10d" || props.day3Forecast.icon === "09n" || props.day3Forecast.icon === "10n")
    forecastImg3 = rain;
  else if(props.day3Forecast.icon === "11d" || props.day3Forecast.icon === "11n")
    forecastImg3 = tStorm;
  else if(props.day3Forecast.icon === "13d" || props.day3Forecast.icon === "13n")
    forecastImg3 = snow;
  else if(props.day3Forecast.icon === "50d" || props.day3Forecast.icon === "50n")
    forecastImg3 = other;

  let forecastImg4 = null;
  if(props.day4Forecast.icon === "01d")
    forecastImg4 = clearDay;
  else if(props.day4Forecast.icon === "01n")
    forecastImg4 = clearNight;
  else if(props.day4Forecast.icon === "02d")
    forecastImg4 = partlyCloudyDay;
  else if(props.day4Forecast.icon === "02n")
    forecastImg4 = partlyCloudyNight;
  else if(props.day4Forecast.icon === "03d" || props.day4Forecast.icon === "04d" || props.day4Forecast.icon === "03n" || props.day4Forecast.icon === "04n")
    forecastImg4 = allCloudy;
  else if(props.day4Forecast.icon === "09d" || props.day4Forecast.icon === "10d" || props.day4Forecast.icon === "09n" || props.day4Forecast.icon === "10n")
    forecastImg4 = rain;
  else if(props.day4Forecast.icon === "11d" || props.day4Forecast.icon === "11n")
    forecastImg4 = tStorm;
  else if(props.day4Forecast.icon === "13d" || props.day4Forecast.icon === "13n")
    forecastImg4 = snow;
  else if(props.day4Forecast.icon === "50d" || props.day4Forecast.icon === "50n")
    forecastImg4 = other;

  let forecastImg5 = null;
  if(props.day5Forecast.icon === "01d")
    forecastImg5 = clearDay;
  else if(props.day5Forecast.icon === "01n")
    forecastImg5 = clearNight;
  else if(props.day5Forecast.icon === "02d")
    forecastImg5 = partlyCloudyDay;
  else if(props.day5Forecast.icon === "02n")
    forecastImg5 = partlyCloudyNight;
  else if(props.day5Forecast.icon === "03d" || props.day5Forecast.icon === "04d" || props.day5Forecast.icon === "03n" || props.day5Forecast.icon === "04n")
    forecastImg5 = allCloudy;
  else if(props.day5Forecast.icon === "09d" || props.day5Forecast.icon === "10d" || props.day5Forecast.icon === "09n" || props.day5Forecast.icon === "10n")
    forecastImg5 = rain;
  else if(props.day5Forecast.icon === "11d" || props.day5Forecast.icon === "11n")
    forecastImg5 = tStorm;
  else if(props.day5Forecast.icon === "13d" || props.day5Forecast.icon === "13n")
    forecastImg5 = snow;
  else if(props.day5Forecast.icon === "50d" || props.day5Forecast.icon === "50n")
    forecastImg5 = other;
  
  return (
    <div className="FiveDay">
      <div className="SingleDay">
        <div className="DayName">
          <p className="Name">{props.day1Forecast.name}</p>
        </div>
        <div className="Icon">
          <img src={forecastImg1} className="ForecastImg" alt="unknown"/>
        </div>
        <div className="Temps">
          <p className="MaxTemp">{props.day1Forecast.maxTemp}</p>
          <p className="MinTemp">{props.day1Forecast.minTemp}</p>
        </div>
      </div>

      <div className="SingleDay">
        <div className="DayName">
          <p className="Name">{props.day2Forecast.name}</p>
        </div>
        <div className="Icon">
          <img src={forecastImg2} className="ForecastImg" alt="unknown"/>
        </div>
        <div className="Temps">
          <p className="MaxTemp">{props.day2Forecast.maxTemp}</p>
          <p className="MinTemp">{props.day2Forecast.minTemp}</p>
        </div>
      </div>
      
      <div className="SingleDay">
        <div className="DayName">
          <p className="Name">{props.day3Forecast.name}</p>
        </div>
        <div className="Icon">
          <img src={forecastImg3} className="ForecastImg" alt="unknown"/>
        </div>
        <div className="Temps">
          <p className="MaxTemp">{props.day3Forecast.maxTemp}</p>
          <p className="MinTemp">{props.day3Forecast.minTemp}</p>
        </div>
      </div>
      
      <div className="SingleDay">
        <div className="DayName">
          <p className="Name">{props.day4Forecast.name}</p>
        </div>
        <div className="Icon">
          <img src={forecastImg4} className="ForecastImg" alt="unknown"/>
        </div>
        <div className="Temps">
          <p className="MaxTemp">{props.day4Forecast.maxTemp}</p>
          <p className="MinTemp">{props.day4Forecast.minTemp}</p>
        </div>
      </div>
      
      <div className="SingleDay">
        <div className="DayName">
          <p className="Name">{props.day5Forecast.name}</p>
        </div>
        <div className="Icon">
          <img src={forecastImg5} className="ForecastImg" alt="unknown"/>
        </div>
        <div className="Temps">
          <p className="MaxTemp">{props.day5Forecast.maxTemp}</p>
          <p className="MinTemp">{props.day5Forecast.minTemp}</p>
        </div>
      </div>
    </div>
  );
}

export default FiveDayForecast;