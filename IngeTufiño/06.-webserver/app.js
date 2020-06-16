const http = require("http");

http
  .createServer((req, res) => {
    // res.write("Hola Mundo desde la Web!");
    res.writeHead(200, { "Content-Type": "application/json" });
    let content = {
      nombre: "Leonel",
      edad: 37,
      url: req.url,
    };
    // Envia un JSON al cliente
    res.write(JSON.stringify(content));
    res.end();
  })
  .listen(8000);

console.log("Escuchando en 8000");
