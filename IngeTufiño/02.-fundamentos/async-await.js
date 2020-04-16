// let getNombre = async () => {
//   undefined.nombre;
//   throw new Error("No existe el usuario en el BDD");
//   return "Leonel";
// };

//console.log(getNombre());

let getNombre = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve("Leonel");
    // }, 3000);
    reject("Error al consultar el nombre");
  });
};

let saludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
};

// getNombre()
//   .then((nombre) => {
//     console.log(nombre);
//   })
//   .catch((err) => {
//     console.log("Error en el ASYNC: ", err);
//   });

saludo()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
