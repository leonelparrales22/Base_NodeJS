let getNombre = () => {
  if (1 === 2) {
    return "Leonel";
  } else {
    throw new Error(`No existe un empleado con el ID.`);
  }
};


//Puedo llamar los tantos await como promesas necesite
let saludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
};

//Al final basta con solo un then y un catch
saludo()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((err) => {
    console.log(err.name, err.message);
  });
