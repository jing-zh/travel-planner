//styles
import "./WeatherCard.css";

import React from "react";

export default function WeatherCard({ detail, weather }) {
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
        <div className='weather-main'>
          <h2>{detail.destination}</h2>
          <h1>{weather.main.temp}º</h1>
        </div>
        <div className='weather-desc'>
          <p>{weather.weather[0].description}</p>
          <p>体感温度：{weather.main.feels_like}º</p>
          <p>湿度：{weather.main.humidity}%</p>
        </div>
      </div>
    </>
  );
}
