<<<<<<< HEAD
// funcion 1
const suma = (a, b) => a + b;
// funcion 2
const cuadrado = (numero) => numero * numero;
// funcion 3
const obtenerUsuario = (id) => ({ id: id, nombre: "usuario" + id });
// funcion 4
const procesarLista = (lista) => {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
};
// funcion 5
(() => {
  console.log("Ejecutando una IIFE");
})();
// funcion 6
const objeto = {
  id: 10,
  obtenerId: () => this.id,
};
// funcion 7
const temporizador = {
  mensaje: "Listo!",
  iniciar: function () {
    setTimeout(() => console.log(this.mensaje), 1000);
  },
};
=======
//Ejercicio 1

for (let i=1;i<21;i++){
  if (i%2===1){
    console.log(i);
  }
}
  
// ejercicio 2
let nombrePlaylist=prompt('Introduce el nombre de la playlist');
let listaPlaylist=[];
let numeroCanciones=Number(prompt('Introduce el número de canciones:'));
for (let i=1;i<=numeroCanciones;i++){
  cancion=prompt('Introduce el nombre de la canción');
  console.log(`Canciones por agregar: faltan ${numeroCanciones-i} canciones`);
  listaPlaylist.push(cancion);
  console.log(listaPlaylist);
} 
console.log(`Playlist ${nombrePlaylist}
  ${listaPlaylist}`);

//Ejercicio 3
let numeroElegido=prompt('Elige entre numero: mayor || menor');
let numerosConjunto=Number(prompt('Cuantos números tiene el conjunto'));
let conjunto=[];
let numero=0;
for (let i=0;i<numerosConjunto;i++){
  numero=Number(prompt('Introduce un numero'))
  conjunto.push(numero)
}
console.log(conjunto)
if (numeroElegido==='mayor') {
  let mayor=Math.max(...conjunto);
  console.log(mayor);
} else {
  let menor=Math.min(...conjunto);
  console.log(menor);
}

//Ejercicio 4
let numero=Number(prompt('Introduce un numero'));
let factorial=1;
for (let i=numero;i>0;i--){
  factorial=factorial*i
}
console.log(`el factorial de ${numero} es ${factorial}`)

//Ejercicio 5
let cantidadVueltas=Number(prompt('Introduce la cantidad de vueltas'));
let tiempos=[];
for (let i=0;i<cantidadVueltas;i++){
  tiempo=Number(prompt(`Tiempo vuelta ${i+1}`));
  tiempos.push(tiempo)
}
console.log(`Cantidad de vueltas: ${cantidadVueltas} vueltas`)
let suma=0;
for (let i=0;i<cantidadVueltas;i++){
  suma+=tiempos[i]
  console.log(`Vuelta ${i+1}: ${tiempos[i]}s`);
}
let promedio=suma/cantidadVueltas;
console.log(promedio);

let numeroJuegos=Number(prompt('Indica las veces que vas a jugar'));
let puntajeJugador=0;
let puntajeOrdenador=0;
for (let i=0;i<numeroJuegos;i++){
  
  let eleccionJugada=prompt('Elige entre: piedra||papel||tijera').trim().toLowerCase();
  function elegirAzar() {
    let numero= Math.floor(Math.random()*3);
    let opciones=['piedra','papel','tijeras'];
    return opciones[numero];
  }
  let eleccionOrdenador=elegirAzar();
  console.log(`Ronda: ${i+1} de ${numeroJuegos}`);
  console.log(`Jugador: ${eleccionJugada}`);
  console.log(`Ordenador:${eleccionOrdenador}`);
  if (eleccionJugada===eleccionOrdenador){
    console.log('Empate');
  } else if (eleccionJugada==='piedra' && eleccionOrdenador==='papel') {
    puntajeOrdenador+=1
    console.log('Jugador Pierde');
  } else if (eleccionJugada==='piedra' && eleccionOrdenador==='tijeras') {
    puntajeJugador+=1
    console.log('Jugador gana');
  }else if (eleccionJugada==='tijeras' && eleccionOrdenador==='papel') {
    puntajeJugador+=1
    console.log('Jugador Gana');
  }else if (eleccionJugada==='tijeras' && eleccionOrdenador==='piedra') {
    puntajeOrdenador+=1
    console.log('Jugador Pierde')
  }else if (eleccionJugada==='papel' && eleccionOrdenador==='tijeras') {
    puntajeOrdenador+=1
    console.log('Jugador Pierde')
  }else if (eleccionJugada==='papel' && eleccionOrdenador==='piedra') {
    puntajeJugador+=1
    console.log('Jugador Gana')
  }else {
    console.log('La eleccion elegida no está contemplada');
  }
console.log(`puntaje: ${puntajeJugador}-jugador || ${puntajeOrdenador}-ordenador`);
}
// Ejercicio 7
let simbolo='*'
for (let i=1;i<14;i++){
  resultado=simbolo.repeat(i);
  console.log(`${resultado}`);
}

//Ejercicio 8
let userRegister='fran';
let passwordRegister='navagua';
let intentos=0;
while (intentos<3){
  let user=prompt('Introduce el usuario');
  let password=prompt('Introduce la contraseña');
  if (user===userRegister && password===passwordRegister){
    console.log('Bienvenido')
    break;
  }else if(intentos==2){
    console.log('Saliendo del programa')
  }else {
    console.log('Autentificación erronea, repite')
  }
  intentos+=1
}

//Ejercicio 9
function azar(){
  let opciones=['cara','cruz'];
  let opcionOrdenador=Math.floor(Math.random()*2);
  return opciones[opcionOrdenador];
}
let eleccionOrdenador='';
let opcionUsuario='';
let contadorAcertadas=0;
let contadorMaximas=0;
while (opcionUsuario!=='salir'){
  opcionUsuario=prompt('Introduce: cara || cruz || salir');
  eleccionOrdenador=azar();
  if (opcionUsuario===eleccionOrdenador){
    console.log('acertaste');
    contadorAcertadas+=1
    if (contadorAcertadas>contadorMaximas){
      contadorMaximas=contadorAcertadas;
    }
  }else if (opcionUsuario==='salir'){
    console.log('Saliendo del programa');
  }else {
    console.log('fallaste')
    contadorAcertadas=0;
  }

}
console.log(`la cantidad máxima de aciertos seguidos es de ${contadorMaximas}`);

function azar(){
  let opcionOrdenador=Math.floor(Math.random()*2);
  return opcionOrdenador;
}
let numeroUsuario=0
let numeroOrdenador=9
while (numeroUsuario!==numeroOrdenador){
  numeroUsuario=Number(prompt('Introduce un numero del 1 al 10:'));
  numeroOrdenador=azar();
  if (numeroUsuario<numeroOrdenador){
    console.log('El numero a adivinar es mayor que el introducido')
  }else{
    console.log('El numero a adivinar es menor que el introducido')
  }
}
console.log('Lo has adivinado')
>>>>>>> origin
