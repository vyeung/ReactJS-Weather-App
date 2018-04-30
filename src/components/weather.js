import React from "react";

class Weather extends React.Component
{
    //humidity uses bizarre form of an if statement. purpose is for the %
    render() {
        return (
            <div>
                <p>Location: {this.props.cityProp} {this.props.countryProp}</p>
                <p>Temperature: {this.props.temperatureProp}</p>
                <p>Humidity: {this.props.humidityProp && <span>{this.props.humidityProp}%</span>}</p>
                <p>Conditions: {this.props.descriptionProp}</p>
            </div>
        ); 
    }
}

export default Weather;
