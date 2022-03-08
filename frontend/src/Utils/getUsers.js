const axios = require("axios");

const getUsers = async () => {
  try {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response;
  } catch (error) {
    return "error";
  }
};

module.exports = getUsers;
