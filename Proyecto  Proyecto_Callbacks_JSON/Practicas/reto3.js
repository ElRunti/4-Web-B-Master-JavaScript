const imprimirCinco = () => console.log(5);

const imprimirCuatro = () => {
    console.log(4);
    setTimeout(imprimirCinco, 1000);
};

const imprimirTres = () => {
    console.log(3);
    setTimeout(imprimirCuatro, 1000);
};

const imprimirDos = () => {
    console.log(2);
    setTimeout(imprimirTres, 1000);
};

const imprimirUno = () => {
    console.log(1);
    setTimeout(imprimirDos, 1000);
};

// Iniciar la cadena
setTimeout(imprimirUno, 1000);
