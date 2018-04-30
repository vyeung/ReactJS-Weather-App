import React from "react";

import Titles from "./components/titles"
import Form from "./components/form"
import Weather from "./components/weather"

//initialize a component
class App extends React.Component
{
    render() {
        //return JSX code
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
}

export default App;




/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/