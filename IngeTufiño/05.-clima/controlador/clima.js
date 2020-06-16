const axios = require("axios");

const getClima = async (ciudad) => {
  ciudad = encodeURI(ciudad);
  const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=e7081f659cd58f82ca37cc8ce9624c79&units=metric`);
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
