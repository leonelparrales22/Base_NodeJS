const clima = require("./controlador/clima");
const argv = require("yargs").options({
  ciudad: {
    alias: "c",
    desc: "Nombre de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

const getInformacion = async (ciudad) => {
  try {
    const temp = await clima.getClima(argv.ciudad);
    return `El clima de ${ciudad} es de ${temp}`;
  } catch (error) {
    return `No se encontró el clima de ${temp}`;
  }
};

getInformacion(argv.ciudad)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
