let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre() {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
  }
};

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);
