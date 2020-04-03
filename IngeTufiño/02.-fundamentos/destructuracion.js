let deadpool = {
  nombre: "Wade",
  apellido: "Wilson",
  poder: "Regeneración",
  getNombre: function () {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  },
};

// Opcion1
console.log(deadpool.getNombre());
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

// Opcion 2
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);
