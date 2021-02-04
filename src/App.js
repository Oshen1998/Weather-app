import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Components/WeatherComponent/WeatherComponent";
const API_KEY = "42a69cbe84ae662c1198553aacf603ab";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      max_temp: undefined,
      min_temp: undefined,
      description: "",
    };
    this.getWeather();
  }
  getWeather = async () => {
    const API_CALL = fetch(
      // `http://api.openweathermap.org/data/2.5/weather?q=London,uk&uints=metric&appid=${API_KEY}`
      `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API_KEY}`
    );
    const res = await (await API_CALL).json();
    console.log(res);
    this.setState({
      city: res.name,
      country: res.sys.country,
      celsius: res.main.temp,
      min_temp: res.main.temp_min,
      max_temp: res.main.temp_max,
      description: res.weather[0].description,
      icon:res.weather[0].icon
    });
  };

  render() {
    return (
      <div>
        <Weather
          city={this.state.city}
          country={this.state.country}
          icon={this.state.icon}
          // main={this.state.main}
          celsius={this.state.celsius}
          max_temp={this.state.max_temp}
          min_temp={this.state.min_temp}
          description={this.state.description}
        />
      </div>
    );
  }
}
export default App;
