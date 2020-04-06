const axios = require("axios");

const getLugaLatLng = async (direccion) => {
  const encodeURL = encodeURI(direccion);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    //timeout: 1000,
    headers: {
      "X-RapidAPI-Key": "6a5c4c31a3mshfbfab201d606093p1dceb4jsnae239d975de2",
    },
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const direccion1 = data.name;
  const latitud = data.lat;
  const longitud = data.lon;

  return {
    direccion1,
    latitud,
    longitud,
  };
};

module.exports = {
  getLugaLatLng,
};
