import React from "react";

import Form from "./components/form/Form";
import CurrWeather from "./components/currWeather/currWeather";
import CurrWeatherImg from "./components/currWeather/currWeatherImg";
import FiveDayForecast from "./components/fiveDayForecast/fiveDayForecast";

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

    fiveDayForecast: {
      day1: {
        name: null,
        minTemp: null,
        maxTemp: null,
        icon: null
      },
      day2: {
        name: null,
        minTemp: null,
        maxTemp: null,
        icon: null
      },
      day3: {
        name: null,
        minTemp: null,
        maxTemp: null,
        icon: null
      },
      day4: {
        name: null,
        minTemp: null,
        maxTemp: null,
        icon: null
      },
      day5: {
        name: null,
        minTemp: null,
        maxTemp: null,
        icon: null
      },
    }
  }

  extractDateInfo = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let next5Days = [];

    //calculate the next 5 days. note that the API gives date in ISO format.
    for(var i=1; i<=5; i++) {
      const tomorrow = new Date();
      const temp = new Date(tomorrow.setDate(tomorrow.getDate() + i));
      const weekDay = days[temp.getDay()];

      //example of a toISOString: 2019-02-01T20:26:15.506Z
      const fullDate = new Date(temp).toISOString().split('T')[0];

      next5Days.push([weekDay, fullDate]);
    }
    return next5Days;
  }

  saveForecastInfo = (i, dateInfo, minTemp, maxTemp, icon) => {
    const updated = {...this.state.fiveDayForecast};
    
    let setDay = "day" + (i+1);
    updated[setDay].name = dateInfo[i][0];
    updated[setDay].minTemp = minTemp;
    updated[setDay].maxTemp = maxTemp;
    updated[setDay].icon = icon;
    
    this.setState({fiveDayForecast: updated});
  }

  //arrow function to make api call
  getCurrentWeather = async(event) => {
    //prevent page refresh when user hits button
    event.preventDefault();
    this.setState({isGettingCurrent: true});

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
        //update states using data in our json string. note that weather is an array.
        this.setState({
          temperature: Math.round(data.main.temp),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          wind: Math.round(data.wind.speed),
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

    var city = event.target.city.value;
    var country = event.target.country.value;

    var apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    var data = await apiCall.json();

    if(city && country) {
      //make sure the entered city is actually a real one
      if(data.message === "city not found") {
        console.log(data);
        this.setState({error: "Unknown location. Please try again."});
        alert("Unknown location. Please try again.");
      }
      else {
        console.log(data);
        let temps = [];
        let icon;
        const dateInfo = this.extractDateInfo();
        console.log(dateInfo);

        for(var i=0; i<5; i++) {
          for(var j=0; j<data.list.length; j++) {
            if(data.list[j].dt_txt.includes(dateInfo[i][1])) {
              //get all the temps for that day
              temps.push(data.list[j].main.temp);

              //get the icon tag associated with time 12:00:00 for that day
              if(data.list[j].dt_txt.includes("12:00:00"))
                icon = data.list[j].weather[0].icon;
            }
          }
          let minTemp = Math.round(Math.min(...temps));
          let maxTemp = Math.round(Math.max(...temps));

          this.saveForecastInfo(i, dateInfo, minTemp, maxTemp, icon);
          temps = []; //reset
        }

        console.log(this.state.fiveDayForecast.day1);
        console.log(this.state.fiveDayForecast.day2);
        console.log(this.state.fiveDayForecast.day3);
        console.log(this.state.fiveDayForecast.day4);
        console.log(this.state.fiveDayForecast.day5);
      }
    }
    else {
      this.setState({error: "Please fill out both fields."});
      alert("Please fill out both fields.");
    }
  }

  render() {
    //return JSX code.
    //setting up props to connect our getWeather functions to the other cmpts.
    let showCurrWeather = null;
    if(this.state.temperature) {
      showCurrWeather = (
        <CurrWeather 
          temperatureProp={this.state.temperature}
          cityProp={this.state.city}
          countryProp={this.state.country}
          humidityProp={this.state.humidity}
          descriptionProp={this.state.description}
          windProp={this.state.wind}
          errorProp={this.state.error} />
      );
    }

    let showCurrWeatherImg = null;
    if(this.state.temperature) {
      showCurrWeatherImg = <CurrWeatherImg weatherId={this.state.weatherId} />;
    }

    let showFiveDay = null;
    if(this.state.fiveDayForecast.day1.name) {
      showFiveDay = <FiveDayForecast fiveDayData={this.state.fiveDayForecast} />;
    }

    return (
      <div className="MainDiv">
        <Form 
          getCurrentWeather={this.getCurrentWeather}
          get5DayForecast={this.get5DayForecast} 
        />

        {this.state.isGettingCurrent ? 
          <div className="Current">
            <div className="Current1">
              {showCurrWeather}
            </div>
            <div className="Current2">
              {showCurrWeatherImg}
            </div>
          </div>
          :
          showFiveDay}
      </div>
    );
  }
}

export default App;