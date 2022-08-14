const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    departureTime: {
      type: Date,
      required: true,
    },
    lon: Number,
    lat: Number,
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
