const clima = require("./controlador/clima");
const argv = require("yargs").options({
  ciudad: {
    alias: "c",
    desc: "Nombre de la ciudad para obtener el clima",
    demand: true,
  },
  opcional: {
    alias: "o",
    desc: "Presión atmosférica = p,  Humedad = h",
  },
}).argv;

const getInformacion = async (ciudad) => {
  try {
    const data = await clima.getClima(argv.ciudad);
    switch (argv.opcional) {
      case "p":
        return `El clima de ${ciudad} es de: ${data.temp}. Presión Atmosférica: ${data.presion}.`
      case "h":
        return `El clima de ${ciudad} es de: ${data.temp}. Humedad: ${data.humedad}.`
      default:
        return `El clima de ${ciudad} es de ${data.temp}.`;
    }
  } catch (error) {
    return `No se encontró el clima de ${ciudad}`;
  }
};

getInformacion(argv.ciudad)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
