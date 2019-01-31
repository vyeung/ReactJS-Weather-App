import React, {Component} from "react";

class Form extends Component {
  state = {
    isGettingCurrent: null
  };

  currentHandler = () => {
    this.setState({isGettingCurrent: true});
  }

  fiveDayHandler = () => {
    this.setState({isGettingCurrent: false});
  }
  
  render() {
    return (
      //let user enter city and country, and give 2 buttons to pick weather mode
      <div className="Form">
        <form onSubmit={this.state.isGettingCurrent ? this.props.getCurrentWeather : this.props.get5DayForecast}>
          <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="country" placeholder="Country..."/>
          
          <div>
            <button className="button" onClick={this.currentHandler}>
              Get Current Weather
            </button>
            <button className="button" onClick={this.fiveDayHandler}>
              Get 5-Day Forecast
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;