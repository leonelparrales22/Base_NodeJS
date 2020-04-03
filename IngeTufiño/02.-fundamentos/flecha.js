// function sumar(a, b) {
//   return a + b;
// }

let sumar = (a, b) => a + b;
console.log(`La suma de a + b es: ${sumar(4, 3)}`);

function saludar() {
  return `Hola`;
}

let saludo = () => `Hola Mundo`;
console.log(saludo());

let deadpool = {
  nombre: "Wade",
  apellido: "Wilson",
  poder: "Regeneración",
  getNombre: () =>
    `${deadpool.nombre} ${deadpool.apellido} - poder: ${deadpool.poder}`,
};
console.log(deadpool.getNombre());
