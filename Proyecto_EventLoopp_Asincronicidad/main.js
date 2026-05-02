const btnCafe1 = document.getElementById("cafe1")
const btnCafe2 = document.getElementById("cafe2");
const btnCafe3 = document.getElementById("cafe3");
const btnCafe4 = document.getElementById("cafe4");

const listaProceso = document.getElementById("pedidos-proceso");
const listaListos = document.getElementById("pedidos-listos");
let ordenId = 1;

btnCafe1.addEventListener('click', () =>{
    const orden = {id: ordenId++, status: 'En Proceso', nombre: 'Espresso' };
    agregarOrdenPendiente(orden);
    procesarOrdenC1(orden);
    
});
btnCafe2.addEventListener('click', () =>{
    const orden = {id: ordenId++, status: 'En Proceso', nombre: 'Ristretto' };
    agregarOrdenPendiente(orden);
    procesarOrdenC2(orden);
    
})
btnCafe3.addEventListener('click', () =>{
    const orden = {id: ordenId++, status: 'En Proceso', nombre: 'Doppioo' };
    agregarOrdenPendiente(orden);
    procesarOrdenC3(orden);
    
})
btnCafe4.addEventListener('click', () =>{
    const orden = {id: ordenId++, status: 'En Proceso', nombre: 'Cappuccinoo' };
    agregarOrdenPendiente(orden);
    procesarOrdenC4(orden);
    
})



function agregarOrdenPendiente(orden){
    const lista = document.createElement('li');
    lista.id = `orden-${orden.id}`;
    lista.textContent = `Pedido #${orden.id}: ${orden.nombre} ${orden.status}`;
    listaProceso.appendChild(lista);
}

function actualizarStatus(orden, status){
    const lista = document.getElementById(`orden-${orden.id}`);
    if(lista){
        lista.textContent = `Pedido #${orden.id}: ${orden.nombre} ${status}`
    }
}

function agregarListos(orden){

    const lista = document.getElementById(`orden-${orden.id}`);
    if(lista){
        listaProceso.removeChild(lista);
        listaListos.appendChild(lista);
    }

}

async function procesarOrdenC1(orden) {
    const promesa = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Terminado'), 5000)
    });
   const resultado = await promesa;

   orden.status = resultado
   actualizarStatus(orden,resultado );
   agregarListos(orden);
}

async function procesarOrdenC2(orden) {
    const promesa = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Terminado'), 8000)
    });
   const resultado = await promesa;

   orden.status = resultado
   actualizarStatus(orden,resultado );
   agregarListos(orden);
}

async function procesarOrdenC3(orden) {
    const promesa = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Terminado'), 10000)
    });
   const resultado = await promesa;

   orden.status = resultado
   actualizarStatus(orden,resultado );
   agregarListos(orden);
}
async function procesarOrdenC4(orden) {
    const promesa = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Terminado'), 4000)
    });
   const resultado = await promesa;

   orden.status = resultado
   actualizarStatus(orden,resultado );
   agregarListos(orden);
}