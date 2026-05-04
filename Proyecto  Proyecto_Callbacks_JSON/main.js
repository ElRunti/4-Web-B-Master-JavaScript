let biblioteca = `{
    "Libros": [
        {"titulo": "Boulevard", "autor": "Flor Salvador", "genero": "Romance", "disponible": true},
        {"titulo": "Principito", "autor": "Antoine de Saint-Exupéry", "genero": "Infantil", "disponible": false},
        {"titulo": "Harry Potter", "autor": "Joanne Rowling", "genero": "Ficcion", "disponible": true}
    ]
}`;

function leerDatos(biblioteca){
    const libros = JSON.parse(biblioteca);
    return libros;
}

function simularLeerDatos(biblioteca,callback){
    setTimeout(() => {
        const datos = leerDatos(biblioteca);
        callback(datos);
    }, 2000);
}
function agregarLibros(titulo ="",autor="",genero="", disponible = false){
    simularLeerDatos(biblioteca, (datos) =>{
        datos.Libros.push({titulo,autor,genero,disponible});
        guardarDatos(datos);
        console.log(`Libro ${titulo} agregado con exito`);
    });
}

function mostrarLibros(){
    simularLeerDatos(biblioteca, (datos) =>{
        console.log(`Libros:`)
        for( let i = 0 ; i <  datos.Libros.length ; i++){
            console.log(`${i + 1}. ${datos.Libros[i].titulo}`)
        }
    });
}

function guardarDatos(datos){
    biblioteca = JSON.stringify(datos);
}

function actualizarDisponible(titulo, nuevaDisponibilidad){
    setTimeout(() => {
        simularLeerDatos(biblioteca, (datos)=>{
            let encontrado = false;
            for(let i = 0; i < datos.Libros.length; i++){
                if(datos.Libros[i].titulo === titulo){
                datos.Libros[i].disponible = nuevaDisponibilidad;
                console.log(`Libro ${titulo} encontrado y actualizado a ${nuevaDisponibilidad}`)
                encontrado  = true
                break;
            }
            }
            if(encontrado){
                guardarDatos(datos);
            }else{
                console.log(`Libro ${titulo} no encontrado`)
            }
           
        })
    },1000)

}
console.log(mostrarLibros());
agregarLibros("La gallina de los huevos de oro", "Ruben Nunez", "Infantil", true);
actualizarDisponible("Principito", false)