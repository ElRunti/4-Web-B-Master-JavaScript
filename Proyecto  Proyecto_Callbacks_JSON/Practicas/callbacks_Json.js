function saludar(nombre, callback) {
  console.log("Hola, " + nombre + "!");
  callback(); 
}

function despedir() {
  console.log("Hasta luego 👋");
}

function obtenerUsuario() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

saludar("Ana", obtenerUsuario());
despedir()

function procesarNumero(num, callback) {
  const resultado = num * 2;
  callback(resultado);
}

procesarNumero(5, function (valor) {
  console.log("El doble es:", valor); 
});


procesarNumero(10, (valor) => console.log("El doble es:", valor));

console.log("Inicio");

setTimeout(function () {
  console.log("Esto se imprime después de 1 segundo (callback async)");
}, 1000);

console.log("Fin");