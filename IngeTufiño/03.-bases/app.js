const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const colors = require("colors");

//console.log(argv.base, argv.limite);
//let base = process.argv[2].split("=")[1];
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
switch (comando) {
  case "listar":
    listarTabla(base, limite)
      .then((mensaje) => console.log(mensaje))
      .catch((err) => console.log(err.name, err.message));
    break;
  case "crear":
    crearArchivo(base, limite)
      .then((mensaje) => console.log(mensaje))
      .catch((err) => console.log(err.name, err.message));
    break;
  default:
    console.log("Comando no valido");
    break;
}
