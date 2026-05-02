//Consumir la API de RICK Y MORTI para mostrar el personaje con el id 1

const API = "https://rickandmortyapi.com/api/character/1" // Se declara como constante y se guarda el link del personaje 1 de rick y morti
fetch(API) // se pasa la url al fetch
.then((respuesta) => respuesta.json()) // la respuesta de la promesa se regresa y despues se ejecuta el metodo para parsear el json
.then((data) => console.log(data));// se recibe en json parseado para poder ser impreso en consola

