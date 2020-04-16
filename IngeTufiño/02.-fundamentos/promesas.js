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

let getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID: ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find((i) => i.id === empleado.id);
    if (!salarioDB) {
      reject(`No se encontro salario para ${empleado.nombre}`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id,
      });
    }
  });
};

getEmpleado(2)
  .then((empleado) => {
    return getSalario(empleado);
  })
  .then((res) => {
    console.log(`El salario de ${res.nombre} es de ${res.salario}`);
  })
  .catch((err) => {
    console.log(err);
  });
