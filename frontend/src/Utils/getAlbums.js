const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getAlbums = async () => {
  try {
    return await axios.get(`${BASE_URL}/albums`);
  } catch (error) {
    return "error";
  }
};

module.exports = { BASE_URL, getAlbums };
