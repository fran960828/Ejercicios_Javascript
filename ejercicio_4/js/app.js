/*
// Ejercicio 11
let numeroDias = Number(prompt("Introduce un número de días:"));
let segundos = numeroDias * 24 * 60 * 60;
console.log(`El número de segundos en ${numeroDias} días es: ${segundos}`);
// Ejercicio 12
let numeroKilometros = Number(prompt("Introduce un número de kilómetros:"));
let millas = numeroKilometros * 0.621371;
console.log(
  `El número de millas en ${numeroKilometros} kilómetros es: ${millas}`
);
// Ejercicio 13
let baseTriangulo = Number(prompt("Introduce la base del triángulo:"));
let alturaTriangulo = Number(prompt("Introduce la altura del triángulo:"));
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(
  `El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo}`
);
// Ejercicio 14
let anchoRectangulo = Number(prompt("Introduce el ancho del rectángulo:"));
let altoRectangulo = Number(prompt("Introduce el alto del rectángulo:"));
let perimetroRectangulo = 2 * (anchoRectangulo + altoRectangulo);
console.log(
  `El perímetro del rectángulo con ancho ${anchoRectangulo} y alto ${altoRectangulo} es: ${perimetroRectangulo}`
);
// Ejercicio 16
let velocidadAndando = 5;
let velocidadBicicleta = 25;
let velocidadCoche = 120;
let velocidadAvion = 900;
let distancia = Number(prompt("Introduce la distancia en kilómetros:"));
let tiempoAndando = distancia / velocidadAndando;
let tiempoBicicleta = distancia / velocidadBicicleta;
let tiempoCoche = distancia / velocidadCoche;
let tiempoAvion = distancia / velocidadAvion;
console.log(`Tiempo andando: ${tiempoAndando} horas`);
console.log(`Tiempo en bicicleta: ${tiempoBicicleta} horas`);
console.log(`Tiempo en coche: ${tiempoCoche} horas`);
console.log(`Tiempo en avión: ${tiempoAvion} horas`);
// Ejercicio 17
let escala1 = prompt("Introduce la primera escala del viaje:");
let escala2 = prompt("Introduce la segunda escala del viaje:");
let escala3 = prompt("Introduce la tercera escala del viaje:");
let escala1Duracion = Number(
  prompt(`Introduce la duración de la escala ${escala1} en horas:`)
);
let escala2Duracion = Number(
  prompt(`Introduce la duración de la escala ${escala2} en horas:`)
);
let escala3Duracion = Number(
  prompt(`Introduce la duración de la escala ${escala3} en horas:`)
);
let duracionTotal = escala1Duracion + escala2Duracion + escala3Duracion;
for (let i = 0; i < 3; i++) {
  console.log(
    `La duración de la escala ${i + 1} es: ${eval(
      `escala${i + 1}Duracion`
    )} horas`
  );
}
console.log(`La duración total del viaje es: ${duracionTotal} horas`);
// Ejercicio 18
let numeroInicial = Number(prompt("Introduce un número inicial:"));
let incremento = Number(prompt("Introduce el incremento:"));
for (let i = 0; i < 5; i++) {
  console.log(
    `Número inicial: ${numeroInicial}, Incremento: ${incremento}, Total: ${
      numeroInicial + incremento
    }`
  );
  numeroInicial += incremento;
}

// Ejercicio 20
let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));
if (numero1 % numero2 === 0) {
  console.log(`${numero1} es múltiplo de ${numero2}`);
} else {
  console.log(`${numero1} no es múltiplo de ${numero2}`);
}
*/
// Ejercicio 21
let segundos = Number(prompt("Introduce un número de segundos:"));
let minutos = segundos / 60;
let horas = minutos / 60;
if (segundos < 60) {
  console.log(`${segundos} segundos`);
} else if (minutos < 60) {
  segundos = (minutos - minutos.toFixed(0)) * 60; // Resto de segundos
  minutos = minutos.toFixed(0); // Minutos completos
  console.log(`${minutos} minutos y ${segundos} segundos`);
} else {
  console.log(`${horas} horas`);
}
