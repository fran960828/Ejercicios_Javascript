//Ejercicio 1
/*
numero = Number(prompt("Introduce un número:"));
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

//Ejercicio 2
mes = prompt("Introduce un mes:");
switch (mes.toLowerCase()) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("El mes tiene 31 días");
    break;
  case "febrero":
    console.log("El mes tiene 28 días");
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("El mes tiene 30 días");
    break;
  default:
    console.log("Mes no válido");
    break;
}
//Ejercicio 3
let password = "*hardcodear*";
let pista1 = "nombre";
let pista2 = "apellido";
let pista3 = "ciudad";
let pista1Usuario = prompt("Introduce la pista 1:");
let pista2Usuario = prompt("Introduce la pista 2:");
let pista3Usuario = prompt("Introduce la pista 3:");
let newpassword = "";
if (
  pista1Usuario === pista1 &&
  pista2Usuario === pista2 &&
  pista3Usuario === pista3
) {
  console.log("Pistas correctas, puedes cambiar la contraseña");
  newpassword = prompt("Introduce la contraseña:");
  console.log("Contraseña cambiada correctamente");
} else {
  console.log("Pistas incorrectas, no puedes cambiar la contraseña");
}
//Ejercicio 5
let grupoA = ["a", "e", "i", "o", "u"];
let grupoB = ["b", "c", "d", "f", "g"];
let grupoC = ["h", "j", "k", "l", "m"];
let grupoD = ["n", "p", "q", "r"];
let grupoE = ["s", "t", "v", "w", "x", "y", "z"];
let letra = prompt("Introduce una letra:").toLowerCase();
if (grupoA.includes(letra)) {
  console.log("La letra pertenece al grupo A");
} else if (grupoB.includes(letra)) {
  console.log("La letra pertenece al grupo B");
} else if (grupoC.includes(letra)) {
  console.log("La letra pertenece al grupo C");
} else if (grupoD.includes(letra)) {
  console.log("La letra pertenece al grupo D");
} else if (grupoE.includes(letra)) {
  console.log("La letra pertenece al grupo E");
} else {
  console.log("La letra no pertenece a ningún grupo");
}
*/
//Ejercicio 6
let tipoPanDisponible = ["blanco", "negro", "integral"];
let ingrediente1Disponible = ["tomate", "lechuga", "pimiento"];
let ingrediente2Disponible = ["cebolla", "aceituna", "pepino"];
let aderezoDisponible = ["mostaza", "mayonesa", "picante"];
let bebidaDisponible = ["coca cola", "pepsi", "sprite"];
console.log(`Elige el tipo de pan entre estas opciones:${tipoPanDisponible}`);
let tipoPan = prompt("Introduce el tipo de pan:");
if (tipoPanDisponible.includes(tipoPan)) {
  console.log(`${tipoPan} ha sido añadido al pedido`);
} else {
  console.log("La opción no es valida, el pedido saldrá incompleto");
}
console.log(
  `Elige el primer ingrediente entre estas opciones:${ingrediente1Disponible}`
);
let ingrediente1 = prompt("Introduce el primer ingrediente:");
if (ingrediente1Disponible.includes(ingrediente1)) {
  console.log(`${ingrediente1} ha sido añadido al pedido`);
} else {
  console.log("La opción no es valida, el pedido saldrá incompleto");
}
console.log(
  `Elige el segundo ingrediente entre estas opciones:${ingrediente2Disponible}`
);
let ingrediente2 = prompt("Introduce el segundo ingrediente:");
if (ingrediente2Disponible.includes(ingrediente2)) {
  console.log(`${ingrediente2} ha sido añadido al pedido`);
} else {
  console.log("La opción no es valida, el pedido saldrá incompleto");
}
console.log(`Elige el aderezo entre estas opciones:${aderezoDisponible}`);
let aderezo = prompt("Introduce el aderezo:");
if (aderezoDisponible.includes(aderezo)) {
  console.log(`${aderezo} ha sido añadido al pedido`);
} else {
  console.log("La opción no es valida, el pedido saldrá incompleto");
}
console.log(`Elige la bebida entre estas opciones:${bebidaDisponible}`);
let bebida = prompt("Introduce la bebida:");
if (bebidaDisponible.includes(bebida)) {
  console.log(`${bebida} ha sido añadido al pedido`);
} else {
  console.log("La opción no es valida, el pedido saldrá incompleto");
}
console.log("Pedido completado");
