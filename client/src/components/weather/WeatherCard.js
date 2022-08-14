//styles
import "./WeatherCard.css";

import React from "react";

export default function WeatherCard({ detail }) {
  return (
    <div className='weather-card'>
      <div id='weather-icon'>icon</div>
      <h1>{detail.destination}</h1>
      <h2>26º</h2>
      <p className='wth'>Sunny</p>
    </div>
  );
}
