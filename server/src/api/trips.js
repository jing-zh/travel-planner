const express = require("express");
const {
  getTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
} = require("../controllers/tripController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all trip routes
router.use(requireAuth);

//get all trips
router.get("/", getTrips);

//get a single trip
router.get("/:id", getTrip);

//POST a new trip

router.post("/", createTrip);

//DELETE a trip

router.delete("/:id", deleteTrip);

//UPDATE a trip

router.patch("/:id", updateTrip);
module.exports = router;
