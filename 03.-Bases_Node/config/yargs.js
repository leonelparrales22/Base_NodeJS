const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    default: 10,
    alias: "l",
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", opts)
  .command("crear", "Genera en txt con la tabla de multiplicar", opts).argv;

module.exports = {
  argv,
};
