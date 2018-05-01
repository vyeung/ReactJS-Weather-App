import React from "react";

import Titles from "./components/titles"
import Form from "./components/form"
import Weather from "./components/weather"

var API_KEY = "d5304abc4f34916873d7ce17376b4847";

//initialize a component
class App extends React.Component
{
    //create an initial state (object)
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }

    //arrow function to make api call
    getWeather = async(event) => {
        //prevent page from auto refreshing when user hits button
        event.preventDefault();

        //get user input from the form
        var city = event.target.elements.city.value;
        var country = event.target.elements.country.value;

        //make api call to OpenWeatherMap using fetch and template string
        var apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    
        //convert data we get back to json
        var data = await apiCall.json();

        //make sure user fills out both fields
        if(city && country) {
            //make sure the entered city is actually a real one
            if(data.message === "city not found") {
                console.log(data);
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "",
                });
                alert("Unknown location. Please try again");
            }
            else {
                console.log(data);

                //update our states using the data in our json string. 
                //notice that weather is an array.
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: "",
                });
            }
        }
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please fill out both fields",
            });
            alert("Please fill out both fields");
        }
    }

    render() {
        //return JSX code.
        //setting up props to connect our getWeather function which connects to the components 
        return (
            <div>
                <Titles />
                <Form getWeatherProp={this.getWeather}/>
                <Weather 
                    temperatureProp={this.state.temperature}
                    cityProp={this.state.city}
                    countryProp={this.state.country}
                    humidityProp={this.state.humidity}
                    descriptionProp={this.state.description}
                    errorProp={this.state.error} 
                />
            </div>
        );
    }
}

export default App;
