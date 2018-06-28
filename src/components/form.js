import React from "react";

const Form = (props) => {
  return (
    //let user enter city and country, and give them a button
    <form onSubmit={props.getWeatherProp}>
      <input type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button>Get Weather</button>
    </form>
  );
}

export default Form;
