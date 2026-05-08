let mesasDisponible = 10;
let reservas =[];
let idReserva= 0;

async function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(mesasSolicitadas <= mesasDisponible){
                resolve("Se puede reservar la mesa");
            }else{
                reject(`No se puede reservar solo hay ${mesasDisponible} mesas disponibles`)
            }
        },2000)
    })
    
}

async function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
        let exito = Math.random() > 0.5;
        if(exito){
            resolve(`Hola ${nombreCliente} se ha hecho su reserva con exito`)
        }else{
            reject(`Hubo un error al hacer su reserva`)
        }
       },2000)
    })
    
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try{
        const validacionMesas = await verificarDisponibilidad(mesasSolicitadas);
        mesasDisponible = mesasDisponible - mesasSolicitadas;
        reservas.push(`Reserva ${idReserva+1} Numero de mesas ${mesasSolicitadas}`);
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        console.log(validacionMesas);
        console.log(reservas[idReserva]);
        console.log(confirmacion);
        idReserva++;
    }catch(error){
        console.log(`Error: \n${error}`)
    }
    
}

hacerReserva("Ruben Nunez", 1);