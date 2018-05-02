import React from "react";

class Weather extends React.Component
{
    //temperature and humidity uses bizarre form of an if statement. purpose is for the %
    render() {
        return (
            <div className="weather__info">
                <p className="weather__key">Location:
                    <span className="weather__value"> {this.props.cityProp} {this.props.countryProp}
                    </span>
                </p>
                <p className="weather__key">Temperature: 
                    <span className="weather__value"> 
                        {this.props.temperatureProp && <span className="weather__value"> {this.props.temperatureProp}°F</span>}
                    </span>    
                </p>
                <p className="weather__key">Humidity: 
                    <span className="weather__value"> 
                        {this.props.humidityProp && <span className="weather__value"> {this.props.humidityProp}%</span>}
                    </span>    
                </p>
                <p className="weather__key">Wind Speed: 
                    <span className="weather__value"> 
                        {this.props.windProp && <span className="weather__value"> {this.props.windProp} MPH</span>}
                    </span>    
                </p>
                <p className="weather__key">Conditions: 
                    <span className="weather__value"> {this.props.descriptionProp}
                    </span>
                </p>
            </div>
        ); 
    }
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