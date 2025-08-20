//Ejercicio 1
/*
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
*/
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