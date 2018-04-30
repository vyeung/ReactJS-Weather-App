import React from "react";

class Form extends React.Component
{
    render() {
        //let user enter city and country, and give them a button
        return (
            <form onSubmit={this.props.getWeatherProp}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        ); 
    }
}

export default Form;
