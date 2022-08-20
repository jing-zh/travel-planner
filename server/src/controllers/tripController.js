require("dotenv").config();
const Trip = require("../models/tripModel");
const geoCoding = require("../utils/geocoding");
const mongoose = require("mongoose");
const axios = require("axios");
//get all trips
const getTrips = async (req, res) => {
  const user_id = req.user._id;
  const trips = await Trip.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(trips);
};

//get a single trip

const getTrip = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such trip" });
  }

  const trip = await Trip.findById(id);
  const { lat, lon } = await geoCoding(trip.destination);

  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}6&units=metric&lang=zh_cn`
  );

  const weatherData = weather.data;

  if (!trip) {
    return res.status(404).json({ error: "No such trip" });
  }

  res.status(200).json({ trip, weatherData });
};

//create a new trip
const createTrip = async (req, res) => {
  const { destination, departureTime, notes } = req.body;

  //add doc to db
  try {
    const user_id = req.user._id;
    const trip = await Trip.create({
      destination,
      departureTime,
      notes,
      user_id,
    });

    res.status(200).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a trip

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such trip" });
  }

  const trip = await Trip.findOneAndDelete({ _id: id });

  if (!trip) {
    return res.status(404).json({ error: "No such trip" });
  }

  res.status(200).json(trip);
};

//update a trip

const updateTrip = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such trip" });
  }

  const trip = await Trip.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!trip) {
    return res.status(404).json({ error: "No such trip" });
  }

  res.status(200).json(trip);
};

module.exports = {
  getTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
};
