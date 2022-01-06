import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./app_components/weather.component";
import { render } from "@testing-library/react";

const API_key = "d8b9a50daab604b9069d76934993c873";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }
  getWeather = async () => {
    const api_call = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`
    );
    const response = await api_call.json();
    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
