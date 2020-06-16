const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
// app.get("/about", function (req, res) {
//   res.send("Este es mi primer sitio web + Node.js");
// });

// app.listen(3000, () => {
//  console.log("Escuchando el puerto 3000")
// });
