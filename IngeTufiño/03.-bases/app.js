const { crearArchivo } = require("./multiplicar/multiplicar");
const argv = require("yargs").command(
  "listar",
  "Imprime en consola la tabla de multiplicar.",
  {
    base: {
      demand: true,
      alias: "b",
    },
    limite: {
      alias: "l",
      default: 10,
    },
  }
).argv;

//console.log(argv.base, argv.limite);
//let base = process.argv[2].split("=")[1];

crearArchivo(argv.base)
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.log(err.name, err.message));
