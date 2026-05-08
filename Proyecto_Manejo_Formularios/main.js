const form = document.getElementById('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const nombre = document.getElementById('input-nombre').value;
    const email = document.getElementById('input-email').value;
    const telefono = document.getElementById('input-telefono').value;
    const negocioCheck = document.querySelectorAll('input[type="checkbox"]');
    const generoRadio = document.querySelector('input[name="genero"]:checked');
    const pais = document.getElementById('pais')
    const fechaEvento = document.getElementById('fecha').value;
    const archivo = document.getElementById('archivo').files[0];

    verificarNombre(nombre);
    verificarEmail(email);
    verificarTelefono(telefono);
    verificarNegocio(negocioCheck);
    verificarGenero(generoRadio);
    verificarPais(pais);
    verificarFecha(fechaEvento);
    verificarArchivo(archivo);
});
function verificarArchivo(archivo){
    const contenedor = document.getElementById('contenedor-archivo');
    const parrafo = document.createElement('p');

    if(!archivo){
        parrafo.textContent = "Debes subir un archivo";
        contenedor.appendChild(parrafo);
    }
}

function verificarFecha(fechaEvento){
    const contenedor = document.getElementById('contenedor-evento');
    const parrafo = document.createElement('p');

    if(!fechaEvento){
        parrafo.textContent = "Debes seleccionar una fecha";
        contenedor.appendChild(parrafo);
    }
}

function verificarPais(pais){
    const contenedor = document.getElementById('contenedor-pais');
    const parrafo = document.createElement('p');

    if(pais === ""){
        parrafo.textContent = "Debes seleccionar un pais";
        contenedor.appendChild(parrafo);
    }
}

function verificarGenero(generoRadio){
    const contenedor = document.getElementById('contenedor-genero');
    const parrafo = document.createElement('p');

    if(!generoRadio){
        parrafo.textContent = "Debes seleccionar un genero";
        contenedor.appendChild(parrafo);
    }
}

function verificarNegocio(negocioCheck){
    const contenedor = document.getElementById('contenedor-negocio');
    const parrafo = document.createElement('p');
    if(!negocioCheck){
        parrafo.textContent = "Se debe de seleccionar un tipo de negocio";
        contenedor.appendChild(parrafo)
    }
}

function verificarTelefono(telefono){
    const contenedor = document.getElementById('contenedor-telefono');
    const parrafo = document.createElement('p');
    if(telefono.length < 10){
        parrafo.textContent = "El numero no es correcto";
        contenedor.appendChild(parrafo)
    }

}
function verificarEmail(email){
    const contenedor = document.getElementById('contenedor-email');
    const parrafo = document.createElement('p');

    if(!email.includes("@") ){
        parrafo.textContent = "El correo no es correcto"
        contenedor.appendChild(parrafo);
    }
}

function verificarNombre(nombre){
    const contenedor = document.getElementById('contenedor-nombre');
    const parrafo = document.createElement('p');
    if(nombre.length < 3){
        parrafo.textContent = "El nombre debe de ser mayor a 3 caracteres";
        contenedor.appendChild(parrafo)
    }

}