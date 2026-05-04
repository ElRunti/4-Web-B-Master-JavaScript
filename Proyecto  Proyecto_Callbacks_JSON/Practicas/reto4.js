function miMap(arr, cb) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    resultado.push(cb(arr[i], i, arr));
  }

  return resultado;
}

let nombres = ["juan", "maria", "pedro"];
let mayus = miMap(nombres, (n) => n.toUpperCase());

console.log(mayus);