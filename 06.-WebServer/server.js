const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   let salida = {
//     nombre: "Leonel",
//     edad: 22,
//     url: req.url,
//   };
//   res.send(salida);
// });

app.get("/data", (req, res) => {
  res.send("Hola Data");
});

app.listen(3000, () => {
  console.log("Esuchando peticiones en el puerto 3000.");
});
