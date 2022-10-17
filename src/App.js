import React from "react";
import Bootstrap from "bootstrap";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="container" id="weather-app-container">
        <div class="card" id="container-card">
          <div class="card-body">
            <div class="container text-center">
              <div class="row">
                <div class="col-5" id="app-name">
                  <i class="fa-regular fa-hand-peace"></i> Get Ready Forecast
                </div>
              </div>
              <div id="bottom-container">
                <div class="row">
                  <div class="col-6">
                    <div>
                      <Weather />
                    </div>
                  </div>
                  <div class="col-6" id="icon-current-temp-c-f">
                    <span id="temp-icon">
                      <img src="" alt="" id="icon" class="temp-icon" />
                    </span>
                    <span id="temperature"></span>
                    <span class="units">
                      <a href="#" id="celsius-link" class="active">
                        °C
                      </a>{" "}
                      |
                      <a href="#" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
                <div class="row"></div>
                <div id="weather-forecast"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" id="open-source">
          Developed by Maggie Hyland. Open-sourced on
          <a
            href="https://github.com/maggie-hyland/vanilla-weather-app"
            id="github-link"
          >
            GitHub
          </a>
          and hosted on Netlify.
        </div>
      </div>
    </div>
  );
}

export default App;
