const argv = require("./config/yargs").argv;

let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log(argv.descripcion + " POST");
    break;
  case "listar":
    console.log("listar");
    break;
  case "actualizar":
    console.log("actualizar");
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
