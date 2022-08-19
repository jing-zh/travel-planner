const Weather = require("../models/weatherModel");
const axios = require("axios");

const getWeatherData = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=39.904989&lon=116.405285&appid=f35ac24472fbfc2e065e7cb84fef7846 `
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getWeatherData;
