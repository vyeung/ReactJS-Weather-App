import React from "react";

const CurrentWeather = (props) => {
  return (
    <div className="WeatherDiv">
      <p className="WeatherKey">Location:
        <span className="WeatherValue"> {props.cityProp}, {props.countryProp}</span>
      </p>

      <p className="WeatherKey">Temperature: 
        <span className="WeatherValue"> {props.temperatureProp}°F</span>    
      </p>

      <p className="WeatherKey">Humidity: 
        <span className="WeatherValue"> {props.humidityProp}%</span>
      </p>

      <p className="WeatherKey">Wind Speed: 
        <span className="WeatherValue"> {props.windProp} MPH</span>
      </p>

      <p className="WeatherKey">Conditions: 
        <span className="WeatherValue"> {props.descriptionProp}</span>
      </p>
    </div>
  );
}

export default CurrentWeather;