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
//const frutasIngresadas = prompt("Ingrese las frutas");
//const frutasSeparadas = frutasIngresadas.split(/[ ]+/);
//let arrayFrutas = frutasSeparadas.reduce((acumulador, fruta) => {
//  acumulador[fruta] = acumulador[fruta] ? acumulador[fruta] + 1 : 1;
//  return acumulador;
//}, {});
//console.log(arrayFrutas);
// Ejercicio 8
// const listaMonosBananas=prompt('Introduce monos y bananas');
// const listaArray=listaMonosBananas.split(/[ ,]+/);
// const bananasPorMono=Number(prompt('Cuantas Bananas come cada mono'));
// let arrayMonos=listaArray.reduce((acumulador,monoBanana)=>{
// acumulador[monoBanana]=acumulador[monoBanana] ? acumulador[monoBanana]+1:1;
// return acumulador;
// },{});
// if ((arrayMonos['banana']/arrayMonos['mono'])<bananasPorMono){
//   console.log('Oh no, no hay suficientes bananas para los monos');
// } else {
//   console.log('Hay suficientes bananas para los monos');
// }
// Ejercicio 9
// const listaPerrosGatos=prompt('Introduce perros y gatos');
// const listaArray=listaPerrosGatos.split(/[ ,]+/);
// const arrayOrdenado=listaArray.sort();
// console.log(arrayOrdenado);
// Ejercicio10
// const listaUsuarios=prompt('Introduce los usuarios');
// const arrayUsuarios=listaUsuarios.split(/[ ,]+/);
// if (arrayUsuarios.length===1){
//   console.log(`${arrayUsuarios[0]} está conectada`);
// } else if(arrayUsuarios.length===2){
//   console.log(`${arrayUsuarios[0]} y ${arrayUsuarios[1]} están conectadas`);
// } else if(arrayUsuarios.length>2){
//   console.log(`${arrayUsuarios[0]}, ${arrayUsuarios[1]} y ${arrayUsuarios.length-2} persona(s) más están conectadas`);
// }
// Ejercicio 11
// const listaPlantas=prompt('Introduce los Flores y plantines');
// let arrayPlantas=listaPlantas.split(/[ ,]+/);
// for (let i=0;i<arrayPlantas.length;i++){
//   if (arrayPlantas[0]==='plantin'){
//     console.log('Error');
//     break;
//   }
//   if (arrayPlantas[i]==='plantin'){
//     arrayPlantas[i]=arrayPlantas[i-1];

//   }
// }
// console.log(arrayPlantas);
// Ejercicio 12
// const listaPlantas = prompt("Introduce las planta,oruga y calavera");
// const arrayPlantas = listaPlantas.split(/[ ,]+/);

// let dentroDeBloque = false;

// const arrayFinal = arrayPlantas.filter((planta) => {
//   if (planta === "oruga") {
//     dentroDeBloque = true; // empezamos a saltar
//     return false; // no se incluye "oruga"
//   }
//   if (planta === "calavera") {
//     dentroDeBloque = false; // terminamos de saltar
//     return false; // no se incluye "calavera"
//   }
//   return !dentroDeBloque; // solo se incluyen si estamos fuera del bloque
// });

// console.log(arrayFinal);
// Ejercicio 13
// const listaSimbolos = prompt("Introduce 5 símbolos");
// const arraySimbolos = listaSimbolos.split(/[ ,]+/).slice(0, 5);
// let comprobacionSimbolos = arraySimbolos.every(
//   (simbolo) => simbolo === arraySimbolos[0]
// );
// if (comprobacionSimbolos === true) {
//   console.log("Enhorabuena, has ganado");
// } else {
//   console.log("Has fallado");
// }
// Ejercicio 14
const listaNumeros = prompt("Introduce numeros");
let array = listaNumeros.split(/[ ,]+/);
let arrayInverso = array.reverse();
console.log(arrayInverso);
