require("dotenv").config();
const axios = require("axios");

const geoCoding = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?limit=2&access_token=${process.env.MAPBOX_URI}`;

  const res = await axios.get(url);
  const coord = {
    lon: res.data.features[0].center[0],
    lat: res.data.features[0].center[1],
  };

  return coord;
};

module.exports = geoCoding;
