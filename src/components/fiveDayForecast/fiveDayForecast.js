import React from "react";
import "./fiveDayForecast.css";

import clearDay from "../../assets/SingleForecastPics/clearDay.png";
import clearNight from "../../assets/SingleForecastPics/clearNight.png";
import partlyCloudyDay from "../../assets/SingleForecastPics/partlyCloudyDay.png";
import partlyCloudyNight from "../../assets/SingleForecastPics/partlyCloudyNight.png";
import allCloudy from "../../assets/SingleForecastPics/allCloudy.png";
import rain from "../../assets/SingleForecastPics/rain.png";
import tStorm from "../../assets/SingleForecastPics/tStorm.png";
import snow from "../../assets/SingleForecastPics/snow.png";
import other from "../../assets/SingleForecastPics/other.png";

const fiveDayForecast = (props) => {

  const iconHashMap = new Map([
    ["01d", clearDay], ["01n", clearNight], ["02d", partlyCloudyDay],
    ["02n", partlyCloudyNight], ["03d", allCloudy], ["03n", allCloudy],
    ["04d", allCloudy], ["04n", allCloudy], ["09d", rain],
    ["09n", rain], ["10d", rain], ["10n", rain], 
    ["11d", tStorm], ["11n", tStorm], ["13d", snow],
    ["13n", snow], ["50d", other], ["50n", other]
  ]);

  //need to convert since the js map function only works on arrays. 
  //ex: {day1:{...}, day2:{...}} -> [{...}, {...}]
  const convertToArray = Object.values(props.fiveDayData);

  return (
    <div className="FiveDay">
      {convertToArray.map((dayObj, i) => (
        <div className="SingleDay" key={i}>
          <div className="DayName">
            <p className="Name">{dayObj.name}</p>
          </div>
          <div className="Icon">
            <img src={iconHashMap.get(dayObj.icon)} className="ForecastImg" alt="unknown"/>
          </div>
          <div className="Temps">
            <p className="MaxTemp">{dayObj.maxTemp}</p>
            <p className="MinTemp">{dayObj.minTemp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default fiveDayForecast;