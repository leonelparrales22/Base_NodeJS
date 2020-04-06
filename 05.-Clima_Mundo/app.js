// const argv = require("yargs").options({
//   direccion: {
//     alias: "d",
//     desc: "Dirección de la ciudad para obtener el clima",
//     demand: true,
//   },
// }).argv;

// console.log(argv.direccion);

const axios = require("axios");

const instance = axios.create({
  baseURL:
    "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Quito",
  //timeout: 1000,
  headers: {
    "X-RapidAPI-Key": "6a5c4c31a3mshfbfab201d606093p1dceb4jsnae239d975de2",
  },
});

instance
  .get()
  .then((resp) => {
    console.log(resp.data.Results[0]);
  })
  .catch((err) => {
    console.log(err);
  });
