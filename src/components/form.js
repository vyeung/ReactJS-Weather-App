import React from "react";

const Form = (props) => {
  return (
    //let user enter city and country, and give them a button
    <div className="Form">
       <form onSubmit={props.getWeatherProp}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        
        <div>
          <button className="button">Get Current Weather</button>
          <button className="button">Get 5-Day Forecast</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
