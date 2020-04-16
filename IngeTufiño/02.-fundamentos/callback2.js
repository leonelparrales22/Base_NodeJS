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
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID: ${id}`);
  } else {
    callback(null, empleadoDB);
    callback(null, empleadoDB);
  }
};

getEmpleado(1, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  console.log(empleado);
});

let getSalario = (nombre, callback) => {
  let empleadoDB = empleados.find((empleado) => empleado.nombre === nombre);
  if (!empleadoDB) {
    callback(`No existe el usuario: ${nombre}`);
  } else {
    console.log(empleadoDB);
    let salarioDB = salarios.find((salario) => salario.id === empleadoDB.id);
    if (!salarioDB) {
      callback(`No existe el salario para: ${nombre}`);
    } else {
      callback(null, empleadoDB, salarioDB);
    }
  }
};

getSalario("Juanes", (err, empleado, salario) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${empleado.nombre} tiene de salario ${salario.salario}`);
  }
});

let getSalario2 = (id, callback) => {
  resultado = salarios.find((i) => i.id == id);
  if (!resultado) {
    callback(`Salario no encontrado para id`);
  } else {
    callback(null, {
      id: id,
      nombre: "CORREGIR",
      salario: resultado.salario,
    });
  }
};

getSalario2(2, (err, empleado) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${empleado.id}: ${empleado.nombre} - ${empleado.salario}`);
  }
});