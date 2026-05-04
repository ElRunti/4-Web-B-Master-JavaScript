const fs = require('fs');

fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
        console.error("No se pudo leer el archivo:", err);
        return;
    }

    const usuarios = JSON.parse(data);


    const activos = usuarios.filter(u => u.activo);

  
    const sumaEdades = activos.reduce((acc, u) => acc + u.edad, 0);
    const promedioEdad = sumaEdades / activos.length;


    const crack = usuarios.reduce((max, u) => 
        (u.hobbies.length > max.hobbies.length) ? u : max
    );


    console.log("======= RESUMEN DE USUARIOS =======");
    console.log(`• Total de usuarios: ${usuarios.length}`);
    console.log(`• Usuarios activos: ${activos.length}`);
    console.log(`• Edad promedio (activos): ${promedioEdad.toFixed(2)} años`);
    console.log(`• Usuario más curioso: ${crack.nombre} (${crack.hobbies.length} hobbies)`);
    console.log("===================================");
});
