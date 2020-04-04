const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} es incorrecto.`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor introducido ${limite} es incorrecto.`);
      return;
    }
    console.log("============================".green);
    console.log(`======TABLA DE ${base}======`.green);
    console.log("============================".green);
    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
      resolve();
    }
  });
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabl-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
