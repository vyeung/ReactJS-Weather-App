import React from "react";

//import Titles from "./components/Titles";
import Form from "./components/Form";
import CurrentWeather from "./components/CurrentWeather";
import CurrWeatherImg from "./components/CurrWeatherImg";

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
    wind: undefined,
    weatherId: undefined,
    error: undefined,
    isGettingCurrent: null,
  }

  //arrow function to make api call
  getCurrentWeather = async(event) => {
    //prevent page from auto refreshing when user hits button
    event.preventDefault();

    this.setState({isGettingCurrent: true});
    console.log("Curr");

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
        this.setState({error: "Unknown location. Please try again."});
        alert("Unknown location. Please try again.");
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
          wind: data.wind.speed,
          weatherId: data.weather[0].id,
          error: "",
        });
      }
    }
    else {
      this.setState({error: "Please fill out both fields."});
      alert("Please fill out both fields.");
    }
  }

  get5DayForecast = async(event) => {
    event.preventDefault();

    this.setState({isGettingCurrent: false});
    console.log("5Day");

    var city = event.target.city.value;
    var country = event.target.country.value;

    var apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    var data = await apiCall.json();

    //make sure user fills out both fields
    if(city && country) {
      //make sure the entered city is actually a real one
      if(data.message === "city not found") {
        console.log(data);
        this.setState({error: "Unknown location. Please try again."});
        alert("Unknown location. Please try again.");
      }
      else {
        console.log(data);
        //update our states using the data in our json string. 
        this.setState({

        });
      }
    }
    else {
      this.setState({error: "Please fill out both fields."});
      alert("Please fill out both fields.");
    }
  }

  render() {
    //return JSX code.
    //setting up props to connect our getWeather function which connects to the components.
    let showWeather = null;
    if(this.state.temperature) {
      showWeather = (
        <CurrentWeather 
          temperatureProp={this.state.temperature}
          cityProp={this.state.city}
          countryProp={this.state.country}
          humidityProp={this.state.humidity}
          descriptionProp={this.state.description}
          windProp={this.state.wind}
          errorProp={this.state.error} />
      );
    }

    let showWeatherImg = null;
    if(this.state.temperature) {
      showWeatherImg = <CurrWeatherImg weatherId={this.state.weatherId} />;
    }

    let whichOption = null;
    if(this.state.isGettingCurrent === true) {
      whichOption = (
        <div className="Current">
          <div className="Current1">
            {showWeather}
          </div>
          <div className="Current2">
            {showWeatherImg}
          </div>
        </div>
      );
    }
    else if(this.state.isGettingCurrent === false) {
      whichOption = <h1>Hello</h1>;
    }

    return (
      <div className="MainDiv">
        <Form 
          getCurrentWeather={this.getCurrentWeather}
          get5DayForecast={this.get5DayForecast} />
        
        {whichOption}
      </div>
    );
  }
}

export default App;