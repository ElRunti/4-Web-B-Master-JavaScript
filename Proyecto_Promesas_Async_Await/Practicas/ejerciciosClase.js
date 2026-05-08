//Ejercicio numero 1
function ejercicio1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("hola mundo"), 500);
  });
}

//Ejercicio numero 2
function ejercicio2() {
  ejercicio1().then((valor) => console.log(valor));
}

//Ejercicio numero 3
async function ejercicio3() {
  const resultado = await ejercicio1();
  console.log(resultado);
}

//Ejercicio numero 4
function promesaQueFalla() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("boom")), 200)
  );
}

async function ejercicio4() {
  try {
    await promesaQueFalla();
  } catch (e) {
    console.log(`atrapado: ${e.message}`);
  }
}

//Ejercicio numero 5
function tarea(valor) {
  return new Promise((resolve) => setTimeout(() => resolve(valor), 300));
}

async function ejercicio5() {
  const [a, b, c] = await Promise.all([tarea(2), tarea(3), tarea(4)]);
  console.log("suma:", a + b + c);
}


(async () => {
  console.log("EJ1:", await ejercicio1());
  await ejercicio2();
  await ejercicio3();
  await ejercicio4();
  await ejercicio5();
})();
