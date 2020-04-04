const argv = require("yargs").command(
  "listar",
  "Imprime en consola la tabla de multiplicar",
  {
    base: {
      demand: true,
      alias: "b",
    },
    limite: {
      default: 10,
      alias: "l",
    },
  }
).argv;

const { crearArchivo } = require("./multiplicar/multiplicar");
const { listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
      .then((texto) => console.log(texto))
      .catch((e) => {
        console.log(e);
      });
    break;
  case "crear":
    crearArchivo(argv.base)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`))
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
