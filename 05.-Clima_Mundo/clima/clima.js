const axios = require("axios");

const getClima = async (latitud, longitud) => {
  const resp = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=e7081f659cd58f82ca37cc8ce9624c79&units=metric`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
