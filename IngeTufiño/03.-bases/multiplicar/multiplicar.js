const fs = require("fs");
const colors = require("colors");
// let crearArchivo = (base) => {
//   return new Promise((resolve, reject) => {
//     if (!Number(base)) {
//       reject(`El valor introducido ${base} no es un número`);
//       return;
//     }
//     let data = "";
//     for (let i = 1; i <= 12; i++) {
//       data += `${base} * ${i} = ${base * i}\n`;
//     }
//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//       if (err) reject(err);
//       else resolve(`Creado el archivo tabla-${base}.txt`);
//     });
//   });
// };

let crearArchivo = async (base, limite = 12) => {
  if (!Number(base)) {
    throw new Error(`El valor introducido ${base} no es un número`);
  }
  let data = "";
  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
  return `Creado el archivo tabla-${base}.txt`;
};

let listarTabla = async (base, limite = 10) => {
  console.log(colors.green("=========="));
  if (!Number(base)) {
    throw new Error(`El valor introducido ${base} no es un número`);
  }
  let data = "";
  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  return data;
};

module.exports = {
  crearArchivo,
  listarTabla,
};
