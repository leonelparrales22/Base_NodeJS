//setTimeout(() => {
//  console.log("Hola Mundo");
//}, 3000);

let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: "Fernando",
    id
  };
  if (id === 20) {
    callback(`El usuario con id ${id}, no existe en la BD`);
  } else {
    callback(null, usuario);
  }
};

// Armando la funci{on de callback en la llamada al método
getUsuarioById(1, (err, usuario) => {
  if (err) {
    return console.log(err);
  }
  console.log("Usuario de base de datos: ", usuario);
});
