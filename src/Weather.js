import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [temp, setTemp] = useState(null);
  let [city, setCity] = useState(null);
  let [humidity, setHumid] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescript] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemp(response) {
    console.log(response.data);
    setTemp(response.data.main.temp);
    setHumid(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescript(response.data.weather.description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="submit" />
      </form>
      <ul class="weather-list">
        <li>
          <div id="city">City: {city}</div>
        </li>
        <li>
          {" "}
          <span>
            Last updated: <span id="date"></span>
          </span>
        </li>
        <li>Temperature: {Math.round(temp)}°C</li>
        <li>
          {" "}
          <div id="description" class="weather-details">
            Description: {description}
          </div>
        </li>
        <li>
          {" "}
          <div class="weather-details">Humidity: {Math.round(humidity)}%</div>
        </li>
        <li>
          {" "}
          <div class="weather-details">Wind: {Math.round(wind)}km/h</div>
        </li>
        <li>
          <img src={icon} alt=" " />
        </li>
      </ul>
    </div>
  );
}
