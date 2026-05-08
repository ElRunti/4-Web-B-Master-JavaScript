const planetas = require('./planetas');

planetas.forEach(planeta => {
  console.log(`Planeta: ${planeta.nombre}`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Tipo: ${planeta.tipo}`);
  console.log(`Distancia desde la Tierra: ${planeta.distanciaTierra}`);
  console.log(`Coordenadas estelares:`);
  console.log(`Ascensión Recta: ${planeta.coordenadasEstelares.ascensionRecta}`);
  console.log(`Declinación: ${planeta.coordenadasEstelares.declinacion}`);
  console.log('----------------------------');
});