function traerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1) return reject(new Error(`id inválido: ${id}`));
      resolve({ id, nombre: `Usuario ${id}` });
    }, 300);
  });
}

function traerPostsDe(usuario) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { titulo: `Post 1 de ${usuario.nombre}` },
          { titulo: `Post 2 de ${usuario.nombre}` },
        ]),
      500
    );
  });
}

function traerComentariosDe(usuario) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { texto: `Comentario 1 de ${usuario.nombre}` },
          { texto: `Comentario 2 de ${usuario.nombre}` },
          { texto: `Comentario 3 de ${usuario.nombre}` },
        ]),
      500
    );
  });
} 

async function mostrarResumen(id) {
  console.time("total");
  try {
    const usuario = await traerUsuario(id);
    console.log("usuario:", usuario.nombre);

    const [posts, comentarios] = await Promise.all([
      traerPostsDe(usuario),
      traerComentariosDe(usuario)
    ]);

    console.log(`${posts.length} posts`);
    console.log(`${comentarios.length} comentarios`);
    
  } catch (err) {
    console.error(" error:", err.message);
  } finally {
    console.timeEnd("total");
  }
}

(async () => {
  console.log("\n=== caso feliz (id=1) ===");
  await mostrarResumen(1);

  console.log("\n=== caso de error (id=-5) ===");
  await mostrarResumen(-5);
})();
