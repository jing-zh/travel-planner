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
    },
    notes: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
