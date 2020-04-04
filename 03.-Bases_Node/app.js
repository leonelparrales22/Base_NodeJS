const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
      .then()
      .catch((e) => {
        console.log(e);
      });
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
      .catch((e) => {
        console.log(e);
      });
    break;
  default:
    console.log("Comando no reconocido");
    break;
}

console.log("Base: " + argv.base);
console.log("Limite: " + argv.limite);

// let argv2 = process.argv;

// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split("=")[1];
