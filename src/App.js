import React from "react";

//import Titles from "./components/Titles";
import Form from "./components/Form";
import CurrentWeather from "./components/CurrentWeather";
import CurrWeatherImg from "./components/CurrWeatherImg";
import FiveDayForecast from "./components/FiveDayForecast";

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

    day1Forecast: {
      name: null,
      minTemp: null,
      maxTemp: null,
      icon: null
    },
    day2Forecast: {
      name: null,
      minTemp: null,
      maxTemp: null,
      icon: null
    },
    day3Forecast: {
      name: null,
      minTemp: null,
      maxTemp: null,
      icon: null
    },
    day4Forecast: {
      name: null,
      minTemp: null,
      maxTemp: null,
      icon: null
    },
    day5Forecast: {
      name: null,
      minTemp: null,
      maxTemp: null,
      icon: null
    }
  }

  extractDateInfo = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let pair = [];
    let final = [];

    let currentDate = new Date();
    console.log(currentDate);

    for(var i=1; i<=5; i++) {
      var dayInfo = new Date();
      dayInfo.setDate(dayInfo.getDate() + i);
      
      var day = days[dayInfo.getDay()];
      
      var date = dayInfo.getDate();
      if(date.toString().length === 1) 
        date = "0" + date;
      
      var month = dayInfo.getMonth() + 1;
      if(month.toString().length === 1) 
        month = "0" + month;
      
      var year = dayInfo.getFullYear();
      var full = year + "-" + month + "-" + date;
      
      pair.push(day);
      pair.push(full);
      final.push(pair);
      pair = [];
    }

    return final;
  }

  saveForecastInfo = (i, dateInfo, minTemp, maxTemp, icon) => {
    if(i === 0) {
      this.setState({
        day1Forecast: {
          name: dateInfo[i][0],
          minTemp: minTemp,
          maxTemp: maxTemp,
          icon: icon
        }
      });
    }
    else if(i === 1) {
      this.setState({
        day2Forecast: {
          name: dateInfo[i][0],
          minTemp: minTemp,
          maxTemp: maxTemp,
          icon: icon
        }
      });
    }
    else if(i === 2) {
      this.setState({
        day3Forecast: {
          name: dateInfo[i][0],
          minTemp: minTemp,
          maxTemp: maxTemp,
          icon: icon
        }
      });
    }
    else if(i === 3) {
      this.setState({
        day4Forecast: {
          name: dateInfo[i][0],
          minTemp: minTemp,
          maxTemp: maxTemp,
          icon: icon
        }
      });
    }
    else if(i === 4) {
      this.setState({
        day5Forecast: {
          name: dateInfo[i][0],
          minTemp: minTemp,
          maxTemp: maxTemp,
          icon: icon
        }
      });
    }
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
          temperature: Math.round(data.main.temp),
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

        let temps = [];
        let icon;
        const dateInfo = this.extractDateInfo();
        console.log(dateInfo);

        for(var i=0; i<5; i++) {
          for(var j=0; j<data.list.length; j++) {
            if(data.list[j].dt_txt.includes(dateInfo[i][1])) {
              // console.log(data.list[j].dt_txt);
              // console.log(data.list[j].main.temp);

              //get all the temps for that day
              temps.push(data.list[j].main.temp);

              //get the icon tag associated with time 12:00:00 for that day
              if(data.list[j].dt_txt.includes("12:00:00")) {
                icon = data.list[j].weather[0].icon;
              }
            }
          }
          let minTemp = Math.round(Math.min(...temps));
          let maxTemp = Math.round(Math.max(...temps));
          this.saveForecastInfo(i, dateInfo, minTemp, maxTemp, icon);
          console.log(minTemp + ", " + maxTemp + ", " + icon);
          temps = []; //reset
        }

        console.log(this.state.day1Forecast);
        console.log(this.state.day2Forecast);
        console.log(this.state.day3Forecast);
        console.log(this.state.day4Forecast);
        console.log(this.state.day5Forecast);
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
      whichOption = (
        <FiveDayForecast 
          day1Forecast={this.state.day1Forecast}
          day2Forecast={this.state.day2Forecast}
          day3Forecast={this.state.day3Forecast}
          day4Forecast={this.state.day4Forecast}
          day5Forecast={this.state.day5Forecast} />
      );
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