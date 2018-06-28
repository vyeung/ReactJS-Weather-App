import React from "react";

const Weather = (props) => {
  //temperature and humidity uses strange form of an if statement. purpose is for the %
  return (
    <div className="weather__info">
      <p className="weather__key">Location:
        <span className="weather__value"> {props.cityProp} {props.countryProp}</span>
      </p>
      <p className="weather__key">Temperature: 
        <span className="weather__value"> 
          {props.temperatureProp && <span className="weather__value"> {props.temperatureProp}°F</span>}
        </span>    
      </p>
      <p className="weather__key">Humidity: 
        <span className="weather__value"> 
          {props.humidityProp && <span className="weather__value"> {props.humidityProp}%</span>}
        </span>    
      </p>
      <p className="weather__key">Wind Speed: 
        <span className="weather__value"> 
          {props.windProp && <span className="weather__value"> {props.windProp} MPH</span>}
        </span>    
      </p>
      <p className="weather__key">Conditions: 
        <span className="weather__value"> {props.descriptionProp}</span>
      </p>
    </div>
  );
}

export default Weather;


/* Stateless functional component version 
const Weather = (props) =>
{
    return (
        <div>
            <p>Location: {props.cityProp} {props.countryProp}</p>
            <p>Temperature: {props.temperatureProp}</p>
            <p>Humidity: {props.humidityProp && <span>{props.humidityProp}%</span>}</p>
            <p>Conditions: {props.descriptionProp}</p>
        </div>
    ); 
}
export default Weather;
*/