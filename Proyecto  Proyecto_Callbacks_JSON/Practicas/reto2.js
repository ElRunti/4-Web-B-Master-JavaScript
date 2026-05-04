const fs = require('fs');

// 1. Leer el archivo
fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer:", err);
        return;
    }

    const config = JSON.parse(data);

  
    config.tema = "dark";
    console.log("Cambiando tema a dark...");


    const updatedData = JSON.stringify(config, null, 2);

    fs.writeFile('config.json', updatedData, (err) => {
        if (err) {
            console.error("Error al escribir:", err);
            return;
        }
        console.log("¡Archivo actualizado con éxito!");
    });
});
