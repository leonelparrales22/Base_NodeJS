const express = require("express");
const app = express();

app.get("/usuario", (req, res) => {
  res.json("get Usuario");
});

app.post("/usuario", (req, res) => {
  res.json("post Usuario");
});

app.put("/usuario", (req, res) => {
  res.json("usuario Usuario");
});

app.delete("/usuario", (req, res) => {
  res.json("delete Usuario");
});

app.listen(3000, () => {
  console.log("Escuchando en el puerto: ", 3000);
});
