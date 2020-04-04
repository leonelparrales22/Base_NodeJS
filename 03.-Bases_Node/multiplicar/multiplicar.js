const fs = require("fs");

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
    for (let i = 0; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
      resolve(`Finalizado`);
    }
  });
};

let crearArchivo = (base) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }
    let data = "";
    for (let i = 1; i <= 10; i++) {
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
