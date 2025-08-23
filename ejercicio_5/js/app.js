//Ejercicio 1

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

//Ejercicio 7
eleccionJugada=prompt('Elige entre: piedra||papel||tijera').trim().toLowerCase();
function elegirAzar() {
  let numero= Math.floor(Math.random()*3);
  let opciones=['piedra','papel','tijeras'];
  return opciones[numero];
}
let eleccionOrdenador=elegirAzar();
console.log(eleccionOrdenador);
if (eleccionJugada===eleccionOrdenador){
  console.log('Empate');
} else if (eleccionJugada==='piedra' && eleccionOrdenador==='papel') {
  console.log('Pierdes');
} else if (eleccionJugada==='piedra' && eleccionOrdenador==='tijeras') {
  console.log('Ganas');
}else if (eleccionJugada==='tijeras' && eleccionOrdenador==='papel') {
  console.log('Ganas');
}else if (eleccionJugada==='tijeras' && eleccionOrdenador==='piedra') {
  console.log('Pierdes')
}else if (eleccionJugada==='papel' && eleccionOrdenador==='tijeras') {
  console.log('Pierdes')
}else if (eleccionJugada==='papel' && eleccionOrdenador==='piedra') {
  console.log('Ganas')
}else {
  console.log('La eleccion elegida no está contemplada');
}
//Ejercicio 8
function elegirAzar() {
  let secuencia=[];
  let colores=['rojo','azul','verde','amarillo'];
  for (let i=0;i<5;i++){
    let numero=Math.floor(Math.random()*4);
    secuencia.push(colores[numero])
    
  }
  return secuencia
};
let secuenciaColores=elegirAzar();
let secuenciaColoresUsuario=[];
 for (let i=0;i<5;i++){
    let colorElegido=prompt("Elige color: rojo || azul || verde || amarillo").toLowerCase();
    secuenciaColoresUsuario.push(colorElegido)
  } 
console.log(secuenciaColores);
console.log(secuenciaColoresUsuario);  
//Ejercicio 9
let numero=prompt('Introduce un numero del 1 al 12')
switch(numero){
  case '1':
    console.log('Enero');
    break;
  case '2':
    console.log('Febrero');
    break;
  case '3':
    console.log('Marzo');
    break;
  case '4':
    console.log('Abril');
    break;
  case '5':
    console.log('Mayo');
    break;
  case '6':
    console.log('Junio');
    break;
  case '7':
    console.log('Julio');
    break;
  case '8':
    console.log('Agosto');
    break;
  case '9':
    console.log('Septiembre');
    break;
  case '10':
    console.log('Octubre');
    break;
  case '11':
    console.log('Noviembre');
    break;
  case '12':
    console.log('Diciembre');
    break;    
}

// Ejercicio 10
let estacion=prompt('Elige estación del año: Invierno || Verano || Otoño || Primavera');
switch(estacion){
  case 'Invierno':
    console.log(`Inicio: ${new Date(2025,11,23)}
                Fin: ${new Date(2026,2,21)}`);
    break;
  case 'Verano':
    console.log(`Inicio: ${new Date(2025,5,21)}
                Fin: ${new Date(2025,8,21)}`);
    break;
  case 'Otoño':
    console.log(`Inicio: ${new Date(2025,8,22)}
                Fin: ${new Date(2025,11,22)}`);
    break;
  case 'Primavera':
    console.log(`Inicio: ${new Date(2025,2,22)}
                Fin: ${new Date(2025,5,20)}`);
    break;
}

// Ejercicio 12
let encenderTelevision=prompt('Desea encender la televisión: si || no').toLowerCase();
if (encenderTelevision==='no'){
  console.log('Programa terminado');
} else {
let canalActual=1;
let volumenActual=15;
console.log(`El canal actual es el ${canalActual}.
  Volumen actual es ${volumenActual}`);
operacion=prompt('Elige operacion: cambiar canal || subir canal || canal anterior || subir volumen || bajar volumen || mutear');
switch(operacion){
  case 'cambiar canal':
    canalActual=Number(prompt('A que canal quieres cambiar'));
    console.log(`El canal actual es el ${canalActual}.
    Volumen actual es ${volumenActual}`);
  break;
  case 'canal siguiente':
    canalActual+=1
    console.log(`El canal actual es el ${canalActual}.
    Volumen actual es ${volumenActual}`);
  break;
  case 'canal anterior':
    canalActual-=1;
    console.log(`El canal actual es el ${canalActual}.
    Volumen actual es ${volumenActual}`);
  break;
  case 'subir volumen':
    volumenActual+=5;
    console.log(`El canal actual es el ${canalActual}.
    Volumen actual es ${volumenActual}`);
  break;
  case 'bajar volumen':
    volumenActual-=5;
    console.log(`El canal actual es el ${canalActual}.
    Volumen actual es ${volumenActual}`);
  break;
  case 'mutear':
   volumenActual=0;
    console.log(`El canal actual es el ${canalActual}.
    Volumen actual es ${volumenActual}`);
  break;

}







}