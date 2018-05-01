import React from "react";

class Weather extends React.Component
{
    //humidity uses bizarre form of an if statement. purpose is for the %
    render() {
        return (
            <div>
                <p>Location: {this.props.cityProp} {this.props.countryProp}</p>
                <p>Temperature: {this.props.temperatureProp && <span>{this.props.temperatureProp}°F</span>}</p>
                <p>Humidity: {this.props.humidityProp && <span>{this.props.humidityProp}%</span>}</p>
                <p>Conditions: {this.props.descriptionProp}</p>
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