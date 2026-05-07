const botonFetchC1 = document.getElementById("solicitar-fetch");
const contendor1 = document.getElementById("data-container-fetch")
const contendor2 = document.getElementById("data-container-axios")
const botonAxiosC1 = document.getElementById("solicitar-axios");
const API = 'https://rickandmortyapi.com/api/character';

botonAxiosC1.addEventListener('click', ()=>{
    axios.get(API)
    .then(response => 
        {
            contendor2.innerHTML = "";

            response.data.results.forEach((personaje, index)=>{
                const contenedorPersonaje = document.createElement('div')
                const nombre = document.createElement('h3');
                const imagen = document.createElement('img');
                const especie = document.createElement('p');
                const genero = document.createElement('p');
                nombre.textContent = personaje.name;
                imagen.src = personaje.image;
                especie.textContent = personaje.species;
                genero.textContent = personaje.gender;
                contenedorPersonaje.appendChild(nombre);
                contenedorPersonaje.appendChild(imagen);
                contenedorPersonaje.appendChild(especie);
                contenedorPersonaje.appendChild(genero);

                contendor2.appendChild(contenedorPersonaje);

            })
        })
    .catch(error =>{
        if(error.response){
            console.error(`Error del servidor: ${error.response.status}`)
        }else if(error.request){
            console.error(`No hubo respuesta del servidor ${error.request}`)
        }else{
            console.error(`Error al configurar la solicitud ${error.message}`)
        }
    })
});


botonFetchC1.addEventListener('click' , ()=>{
    fetch(API)
    .then(response => response.json())
    .then(data => {
        contendor1.innerHTML = '';
        data.results.forEach((personaje, index) => {
            const elementosPersonajes = document.createElement('div');
            elementosPersonajes.innerHTML = `
            <h3>${personaje.name}</h3>
            <img src=${personaje.image} alt=${personaje.name}>
            <p>Especie: ${personaje.species}</p>
            <p>Genero: ${personaje.gender}</p>
            `
            contendor1.appendChild(elementosPersonajes);
        });

    }) 
    .catch(error => console.log(error));

});

