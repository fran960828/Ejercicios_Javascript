// Ejercicio 1
// const ingreseNombres = prompt(
//   "Introduce varios nombres separados por espacios"
// );
// const nombresSeparados = ingreseNombres.split(/[ ]+/);
// for (let i = 0; i < nombresSeparados.length; i++) {
//   console.log(`Hola ${nombresSeparados[i]}!`);
// }
// Ejercicio 2
// const numerosIngresados = prompt("Ingrese los numeros necesarios");
// const numerosSeparados = numerosIngresados.split(/[ ]+/);
// let menor = numerosSeparados.reduce((menor, numero) => {
//   if (Number(numero) < Number(menor)) {
//     return numero;
//   }
//   return menor;
// });
// console.log(menor);
// Ejercicio 3
// const numerosIngresados = prompt("Ingrese los numeros necesarios");
// const numerosSeparados = numerosIngresados.split(/[ ]+/);
// let suma = numerosSeparados.reduce((suma, numero) => {
//   suma += Number(numero);
//   return suma;
// }, 0);
// console.log(suma);
// Ejercicio 4
// const numerosIngresados = prompt("Ingrese los numeros necesarios");
// const numerosSeparados = numerosIngresados.split(/[ ]+/);
// const valorBuscado = prompt("Introduce el valor buscado");
// let valorComprobado = numerosSeparados.some(
//   (numero) => numero === valorBuscado
// );
// console.log(valorComprobado);
// Ejercicio 5
// const numerosIngresados = prompt("Ingrese los numeros necesarios");
// const numerosSeparados = numerosIngresados.split(/[ ]+/);
// const valorBuscado = prompt("Introduce el valor buscado");
// let valorComprobado = numerosSeparados.some(
//   (numero) => numero === valorBuscado
// );
// if (valorComprobado === true) {
//   let indice = numerosSeparados.indexOf(valorBuscado);
//   console.log(`El número ${valorBuscado} se encuentra en el índice ${indice}`);
// } else {
//   console.log("valor no encontrado en el array");
// }
// Ejercicio 6
// const personajesIngresados = prompt("Ingrese los personajes");
// const personajesSeparados = personajesIngresados.split(/[ ]+/);
// let positionFrodo = personajesSeparados.indexOf("frodo");
// console.log(positionFrodo);
// let positionSam = personajesSeparados.indexOf("sam");
// console.log(positionSam);
// let distancia = Math.abs(positionFrodo - positionSam);
// console.log(distancia);
// if (distancia === 1) {
//   console.log("Frodo y sam estan juntos, estan a salvo");
// } else {
//   console.log("Frodo y sam estan separados, Peligro");
// }
//Ejercicio 7
const frutasIngresadas = prompt("Ingrese las frutas");
const frutasSeparadas = frutasIngresadas.split(/[ ]+/);
let arrayFrutas = frutasSeparadas.reduce((acumulador, fruta) => {
  acumulador[fruta] = acumulador[fruta] ? acumulador[fruta] + 1 : 1;
  return acumulador;
}, {});
console.log(arrayFrutas);
