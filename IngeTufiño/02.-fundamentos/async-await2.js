let empleados = [
  {
    id: 1,
    nombre: "Santiago",
  },
  {
    id: 2,
    nombre: "Wendy",
  },
  {
    id: 3,
    nombre: "Leonel",
  },
];

let salarios = [
  {
    id: 1,
    salario: 850,
  },
  {
    id: 2,
    salario: 900,
  },
];

let getEmpleado = async (id) => {
  let empleadoDB = empleados.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    throw new Error(`No existe un empleado con el ID: ${id}`);
  } else {
    return empleadoDB;
  }
};

let getSalario = async (empleado) => {
  let salarioDB = salarios.find((i) => i.id === empleado.id);
  if (!salarioDB) {
    throw new Error(`No se encontro salario para ${empleado.nombre}`);
  } else {
    return {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id,
    };
  }
};

let getInformacion = async (id) => {
  let empleado = await getEmpleado(id);
  let salario = await getSalario(empleado);
  return `Empleado: ${empleado.nombre}, Salario: ${salario.salario}`;
};



getInformacion(1)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => console.log(err));