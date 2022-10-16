import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  let city = "Lisbon";

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my Weather App</h1>
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>
        <img src="test.png" alt="SheCodes Logo" />
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
