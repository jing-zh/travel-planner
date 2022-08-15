//styles
import "./WeatherCard.css";

import React from "react";

export default function WeatherCard({ detail }) {
  // const [weatherData, setWeatherData] = useState({});
  // const key = process.env.REACT_APP_OPENWEATHER_KEY;

  // useEffect(() => {
  //   const getWeather = async () => {
  //     try {
  //       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid&appid=${key}`;
  //       const res = await axios.get(url);
  //       setWeatherData(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getWeather();
  // }, [id]);

  return (
    <>
      <div className='weather-card'>
        <div id='weather-icon'>icon</div>
        <h1>{detail.destination}</h1>
        {/* <p>{weatherData}</p> */}
        {/* <h2>{weatherData.main.temp}º</h2>
          <p className='wth'>{weatherData.weather[0].description}</p> */}
      </div>
    </>
  );
}
