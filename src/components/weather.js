import React from "react";

class Weather extends React.Component
{
    render() {
        return (
            <div>
                {this.props.cityProp}
                {this.props.countryProp}
                {this.props.temperatureProp}
                {this.props.humidityProp}
                {this.props.descriptionProp}
            </div>
        ); 
    }
}

export default Weather;
