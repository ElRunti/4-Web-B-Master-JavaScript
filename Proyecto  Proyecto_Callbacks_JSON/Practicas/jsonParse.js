const usuario = {
  id: 1,
  nombre: "Luna",
  edad: 22,
  activo: true,
  hobbies: ["leer", "correr", "código"],
  direccion: {
    ciudad: "Guadalajara",
    pais: "México",
  },
};

const textoJSON = JSON.stringify(usuario);
console.log("Como string JSON:");
console.log(textoJSON);
console.log("Tipo:", typeof textoJSON); 

console.log("\nBonito:");
console.log(JSON.stringify(usuario, null, 2));


const respuestaServidor = '{"id":42,"nombre":"Carlos","activo":false}';

const obj = JSON.parse(respuestaServidor);
console.log("\nComo objeto JS:");
console.log(obj);
console.log("Tipo:", typeof obj);       
console.log("Nombre:", obj.nombre);     
console.log("Activo:", obj.activo);    


const malFormado = "{ nombre: 'Ana' }"; // comillas simples + sin comillas en clave
try {
  JSON.parse(malFormado);
} catch (err) {
  console.log("\n❌ Error al parsear JSON inválido:", err.message);
}


const tareas = [
  { id: 1, texto: "Estudiar callbacks", hecha: true },
  { id: 2, texto: "Practicar JSON", hecha: false },
];

const guardado = JSON.stringify(tareas);
console.log("\n💾 Guardado:", guardado);


const recuperado = JSON.parse(guardado);
console.log("📤 Recuperado (0):", recuperado[0].texto);