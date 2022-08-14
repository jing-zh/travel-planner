const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  coord: {
    lon: Number,
    lat: Number,
  },
  weather: [
    {
      id: Number,
      main: String,
      description: String,
      icon: String,
    },
  ],
  base: String,
  main: {
    temperature: Number,
    feels_like: Number,
    pressure: Number,
    humidity: Number,
  },
  visibility: Number,
  wind: {
    speed: Number,
    degree: Number,
  },
  timezone: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Weather", weatherSchema);
