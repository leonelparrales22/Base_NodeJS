const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

// Para su importación
const argv = require("./config/yargs").argv;


const colors = require("colors");
console.log(colors.red("*ALERTA*"));
console.log("PROSIGA".green);

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
    console.log(colors.red("Comando no reconocido"));
    break;
}

console.log("Base: " + argv.base);
console.log("Limite: " + argv.limite);

//node app.js base=5
// let argv2 = process.argv;
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split("=")[1];
// console.log(base)
