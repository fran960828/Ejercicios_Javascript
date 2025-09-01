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
// const listaNumeros = prompt("Introduce numeros");
// let array = listaNumeros.split(/[ ,]+/);
// let arrayInverso = array.reverse();
// console.log(arrayInverso);
// Ejercicio 15
// const listaNumeros = prompt("Introduce numeros");
// let array = listaNumeros.split(/[ ,]+/);
// let arrayDoble = array.map((numero) => numero * 2);
// console.log(arrayDoble);
// Ejercicio 16
// const listaAnimales = prompt("Introduce los animales");
// const arrayAnimales = listaAnimales.split(/[ ,]+/);
// arrayFiltrado = arrayAnimales.filter((animal) => {
//   if (animal === "mosquito") {
//     return false;
//   }
//   if (animal === "alacran") {
//     return false;
//   }
//   return animal;
// });
// console.log(arrayFiltrado);
// Ejercicio 17
// const primerString = prompt("Introduce los numeros del primer array");
// const primerArray = primerString.split(/[ ,]+/);
// const segundoString = prompt("Introduce los numeros del segundo array");
// const segundoArray = segundoString.split(/[ ,]+/);
// if (primerArray.length === segundoArray.length) {
//   let comprobacion = primerArray.every((numero, i, arr) => {
//     return numero === segundoArray[i];
//   });
//   if (comprobacion === true) {
//     console.log("Los array son iguales");
//   } else {
//     console.log("Los arrays son distintos el uno del otro");
//   }
// } else {
//   console.log("Los arrays son distintos el uno del otro");
// }
// Ejercicio 18
// Jugador 1
// const jugador1 = prompt("Introduce el nombre del primer jugador");
// const puntajesJugador1 = prompt("Introduce los puntajes del primer jugador");
// const arrayPuntajes1 = puntajesJugador1.split(/[ ,]+/).map(Number);
// Jugador 2
// const jugador2 = prompt("Introduce el nombre del segundo jugador");
// const puntajesJugador2 = prompt("Introduce los puntajes del segundo jugador");
// const arrayPuntajes2 = puntajesJugador2.split(/[ ,]+/).map(Number);
// let resultado = arrayPuntajes1.reduce(
//   (acumulador, puntaje, i) => {
//     if (puntaje > arrayPuntajes2[i]) {
//       acumulador.jugador1++;
//     } else if (puntaje < arrayPuntajes2[i]) {
//       acumulador.jugador2++;
//     }
//     return acumulador;
//   },
//   { jugador1: 0, jugador2: 0 }
// );
// if (resultado.jugador1 > resultado.jugador2) {
//   console.log(`Gana ${jugador1}`);
// } else {
//   console.log(`Gana ${jugador2}`);
// }
// Ejercicio 19
// const primerString = prompt("Introduce los numeros del primer array");
// const primerArray = primerString.split(/[ ,]+/);
// arrayRecortado = primerArray.map((palabra) => palabra.slice(0, 5));
// console.log(arrayRecortado);
// Ejercicio 20
// let array2D = [
//   [2, 7, 12, 1],
//   [8, 23],
//   [9, 45, 7],
//   [22, 3, 24, 4],
// ];
// let arraySuma = array2D.map((elemento) => {
//   return elemento.reduce((acumulador, arr) => {
//     acumulador += arr;
//     return acumulador;
//   });
// });
// console.log(arraySuma);
// let maximo = arraySuma.reduce((acumulador, numero) => {
//   if (numero > acumulador) {
//     return numero;
//   }
//   return acumulador;
// });
// console.log(maximo);
// Ejercicio 21
// let array2D = [
//   [2, 7, 12, 1],
//   [8, 23],
//   [9, 45, 7],
//   [22, 3, 24, 4],
// ];
// let columna = Number(prompt("Introduce la columna que quieres sumar"));
// let suma = array2D.reduce((acumulador, elemento) => {
//   if (columna <= elemento.length) {
//     acumulador += elemento[columna - 1];
//     return acumulador;
//   }
//   return acumulador;
// }, 0);
// console.log(suma);
// Ejercicio 22
// let frutas = [
//   ["tomate", "manzana", "platano", "platano"],
//   ["platano", "tomate"],
//   ["tomate", "manzana", "platano"],
//   ["manzana", "platano", "tomate", "platano"],
// ];
// let item = prompt("Introduce una fruta");
// let conteo = frutas.reduce((acumulador, elemento) => {
//   acumulador += elemento.filter((fruta) => fruta === item).length;
//   return acumulador;
// }, 0);
// console.log(conteo);
// Ejercicio 23
// let numeros = prompt("Introduce 9 numeros separados por espacios");
// let arrayNumeros = numeros.split(" ").map(Number);
// let grilla = [];
// let n = Math.sqrt(arrayNumeros.length); //Esto es la raiz cuadrada de la longitud del array
// if (!Number.isInteger(n)) {
//   //Esta condición comprueba que no es entero
//   console.log("la grilla no es cuadrada");
// } else {
//   for (let i = 0; i < n; i++) {
//     grilla.push(arrayNumeros.slice(i * n, i * n + n));
//   }

//   // Comprobar filas
//   let filasRepetidas = grilla.some((fila) => {
//     return new Set(fila).size < fila.length;
//   });
//   // Comprobar columnas
//   let columnaRepetidas = false;
//   for (let c = 0; c < n; c++) {
//     let columna = grilla.map((fila) => fila[c]);
//     if (new Set(columna).size < n) {
//       columnaRepetidas = true;
//       break;
//     }
//   }
//   //Comprobar diagonales
//   let diagonalPrincipal = [];
//   let diagonalSecundaria = [];
//   for (i = 0; i < n; i++) {
//     diagonalPrincipal.push(grilla[i][i]);
//     diagonalSecundaria.push(grilla[i][n - 1 - i]);
//   }

//   let diagonalesRepetidas =
//     new Set(diagonalPrincipal).size < diagonalPrincipal.length ||
//     new Set(diagonalSecundaria).size < diagonalSecundaria.length;
//   // --- Mostrar resultados ---
//   console.log("Fila repetida:", filasRepetidas);
//   console.log("Columna repetida:", columnaRepetidas);
//   console.log("Diagonal repetida:", diagonalesRepetidas);
// }

// ----- Ejercicio 24 -------
// Funciones
// function desordenarArray(opciones) {
//   return opciones.sort(() => Math.random() - 0.5);
// }

// function crearGrilla(grilla, opciones) {
//   for (let i = 0; i < 3; i++) {
//     grilla.push(opciones.slice(i * 3, i * 3 + 3));
//   }
//   return grilla;
// }

// function revisarGrilla(grilla) {
//   return grilla.every((fila) => {
//     return fila.every((elemento) => {
//       return elemento === "descubierto" || elemento === "mina";
//     });
//   });
// }

// // Codigo Principal
// let arrayInicial = [
//   "mina",
//   "vacia",
//   "vacia",
//   "mina",
//   "vacia",
//   "vacia",
//   "mina",
//   "vacia",
//   "vacia",
// ];

// // Creamos un array random
// let arrayOrdenado = desordenarArray(arrayInicial);

// // Creamos la grilla
// let grilla = crearGrilla([], arrayOrdenado);
// console.log(grilla);

// // Estado de victoria
// let grillaDescubierta = false;

// // Bucle de juego
// while (grillaDescubierta === false) {
//   // Pide coordenadas
//   let x = Number(prompt("Introduce la coordenada x (1-3)")) - 1;
//   let y = Number(prompt("Introduce la coordenada y (1-3)")) - 1;

//   if (grilla[x][y] === "mina") {
//     console.log("💥 Oh no, has pisado una mina. ¡Perdiste!");
//     break;
//   } else if (grilla[x][y] === "vacia") {
//     console.log("✅ Casilla vacía, sigue jugando...");
//     grilla[x][y] = "descubierto";
//   } else if (grilla[x][y] === "descubierto") {
//     console.log("⚠️ Esa casilla ya estaba descubierta. Elige otra.");
//   }

//   // Verificamos si ya se descubrió todo
//   grillaDescubierta = revisarGrilla(grilla);

//   if (grillaDescubierta) {
//     console.log("🎉 ¡Felicidades! Descubriste todas las casillas sin minas.");
//   }
// }

// --------- EJERCICIO 25 ---------------
// Funciones
// function crearCategoria(categoria) {
//   programaTareas[categoria] = [];
// }

// function crearTarea(categoria, tarea) {
//   programaTareas[categoria].push(tarea);
// }

// function mostrarCategorias() {
//   let keys = Object.keys(programaTareas);
//   if (keys.length === 0) {
//     console.log("⚠️ No hay categorías aún.");
//     return [];
//   }
//   console.log("📂 Categorías disponibles:");
//   keys.forEach((cat, index) => {
//     console.log(`${index + 1}. ${cat}`);
//   });
//   return keys;
// }

// function mostrarTareasOrganizadas() {
//   let keys = Object.keys(programaTareas);
//   if (keys.length === 0) {
//     console.log("⚠️ No hay categorías ni tareas.");
//     return;
//   }

//   console.log("📋 Tareas organizadas:");
//   keys.forEach((cat) => {
//     console.log(`\n📂 ${cat}:`);
//     if (programaTareas[cat].length === 0) {
//       console.log("   (Sin tareas todavía)");
//     } else {
//       programaTareas[cat].forEach((tarea, i) => {
//         console.log(`   ${i + 1}. ${tarea}`);
//       });
//     }
//   });
// }

// // Programa principal
// let programaTareas = {};
// let continuar = true;

// while (continuar) {
//   let opcion = prompt(
//     "Elige una opción:\n1. Crear categoría\n2. Agregar tarea\n3. Ver todas\n4. Salir"
//   );

//   switch (opcion) {
//     case "1": {
//       let categoria = prompt("Ingrese el nombre de la nueva categoría:");
//       if (!programaTareas[categoria]) {
//         crearCategoria(categoria);
//         console.log(`✅ Categoría '${categoria}' creada.`);
//       } else {
//         console.log("⚠️ Esa categoría ya existe.");
//       }
//       break;
//     }

//     case "2": {
//       let categorias = mostrarCategorias();
//       if (categorias.length > 0) {
//         let indice = Number(prompt("Elige el número de la categoría:")) - 1;
//         if (indice >= 0 && indice < categorias.length) {
//           let tarea = prompt("Ingrese el nombre de la tarea:");
//           crearTarea(categorias[indice], tarea);
//           console.log(`📝 Tarea añadida a '${categorias[indice]}'`);
//         } else {
//           console.log("⚠️ Opción inválida.");
//         }
//       }
//       break;
//     }

//     case "3": {
//       mostrarTareasOrganizadas();
//       break;
//     }

//     case "4": {
//       continuar = false;
//       console.log("👋 Programa finalizado.");
//       break;
//     }

//     default:
//       console.log("⚠️ Opción inválida. Intenta de nuevo.");
//   }
// }
// --- Ejercicio 26 ---
// Functions
// ----- Funciones -----

function mover(tablero, dx, dy) {
  let xOriginal = posicionViboraX;
  let yOriginal = posicionViboraY;

  // Actualizamos posición
  posicionViboraX += dx;
  posicionViboraY += dy;

  // Wrap-around dinámico
  if (posicionViboraX < 0) posicionViboraX = tablero[0].length - 1;
  if (posicionViboraX >= tablero[0].length) posicionViboraX = 0;
  if (posicionViboraY < 0) posicionViboraY = tablero.length - 1;
  if (posicionViboraY >= tablero.length) posicionViboraY = 0;

  // Validar casilla
  const casilla = tablero[posicionViboraY][posicionViboraX];
  if (casilla === "ladrillo") {
    console.log("La víbora no puede avanzar en esa dirección.");
    posicionViboraX = xOriginal;
    posicionViboraY = yOriginal;
  } else if (casilla === "manzana") {
    console.log(
      `La víbora se ha comido la manzana en (${posicionViboraX},${posicionViboraY})`
    );
    tablero[posicionViboraY][posicionViboraX] = "vacio";
  }
}

function imprimirTablero(tablero, x, y) {
  console.clear(); // Limpiar consola para mejor visualización
  for (let i = 0; i < tablero.length; i++) {
    const fila = tablero[i].map((celda, j) =>
      i === y && j === x ? "V" : celda
    );
    console.log(fila.join(" | "));
  }
  console.log("\n");
}

// ----- Código principal -----

const tablero = [
  ["trebol", "trebol", "manzana", "trebol", "trebol"],
  ["manzana", "ladrillo", "trebol", "ladrillo", "manzana"],
  ["trebol", "ladrillo", "vivora", "trebol", "trebol"],
  ["trebol", "manzana", "trebol", "ladrillo", "trebol"],
  ["manzana", "trebol", "trebol", "manzana", "ladrillo"],
  ["trebol", "trebol", "trebol", "trebol", "manzana"],
];

let posicionViboraX = 2;
let posicionViboraY = 2;

let continuar = true;

while (continuar) {
  imprimirTablero(tablero, posicionViboraX, posicionViboraY);

  const movimiento = prompt(
    "Elige un movimiento:\n1->Abajo\n2->Arriba\n3->Derecha\n4->Izquierda"
  );

  switch (movimiento) {
    case "1":
      mover(tablero, 0, 1);
      break; // Abajo
    case "2":
      mover(tablero, 0, -1);
      break; // Arriba
    case "3":
      mover(tablero, 1, 0);
      break; // Derecha
    case "4":
      mover(tablero, -1, 0);
      break; // Izquierda
    default:
      console.log("Movimiento inválido");
      break;
  }

  // Revisar si quedan manzanas
  continuar = tablero.some((fila) => fila.includes("manzana"));
}

console.log("¡Has comido todas las manzanas! 🐍🍎");
