const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

//Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");

require("./hbs/helpers");

app.set("view engine", "hbs");

//helpers

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "leonel parrales",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.get("/data", (req, res) => {
  res.send("Hola Data");
});

app.listen(3000, () => {
  console.log("Esuchando peticiones en el puerto 3000.");
});
