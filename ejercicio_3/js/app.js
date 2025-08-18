//Ejercicio 1
/*
let nombre=prompt('Introduce tu nombre:');
let apellido=prompt('Introduce tu apellido:');
let saludo=`Hola ${nombre} ${apellido}, bienvenid@ a ada`;
console.log(saludo);

// Ejercicio 2
let preferenciaHelado1=prompt('Indica tus sabores favoritos:');
let preferenciaHelado2=prompt('Indica tus sabores favoritos:');
let preferenciaHelado3=prompt('Indica tus sabores favoritos:');
let pedido=`Aqui tiene su helado de ${preferenciaHelado1},
${preferenciaHelado2},${preferenciaHelado3}`;
console.log(pedido);

//Ejercicio 3
let datos=[];
let dato='';
for (let i=0;i<5;i++){
  if (i===0){
  dato=prompt('Introduce el nombre:');
  datos.push(dato);
  } else if (i===1){
  dato=prompt('Introduce el apellido:');
  datos.push(dato);
  } else if (i===2){
  dato=prompt('Introduce tu edad:');
  datos.push(dato);
  } else if (i===3){
  dato=prompt('Introduce tu nacionalidad:');
  datos.push(dato);
  } else if (i===4){
  dato=prompt('Introduce tu numero de documento:');
  datos.push(dato);
  } 
}
console.log(datos);

//Ejercicio 4
let playlist=prompt('Introduce el nombre de la playlist:');
let cancion1=prompt('Introduce el nombre de la canción 1:');
let cancion2=prompt('Introduce el nombre de la canción 2:');
let cancion3=prompt('Introduce el nombre de la canción 3:');
let mensaje=`Se ha creado la playlist ${playlist} con las canciones
${cancion1},${cancion2} y ${cancion3}`;
console.log(mensaje);

//Ejercicio 5
let calle=prompt('Introduce la calle:');
let numero=prompt('Introduce el número:');
let piso=prompt('Introduce el piso:');
let codigoPostal=prompt('Introduce el código Postal:');
let Ciudad=prompt('Introduce la Ciudad:');
let Pais=prompt('Introduce el País:');
let mensaje=`La dirección que ha ingresado es: ${calle} 
${numero} ${piso}, ${codigoPostal}, ${Ciudad},${Pais}`;
console.log(mensaje);

//Ejercicio 6
let mes31=['Enero','Marzo','Mayo','Julio','Agosto','Octubre','Diciembre']
let mes30=['Abril','Junio','Septiembre','Noviembre']
let mes29=['Febrero']
console.log(`Meses con 31 días:${mes31.join(',')}.
Meses con 30 días:${mes30.join(',')}.
Meses con 29 días:${mes29.join(',')}.
`)

//Ejercicio 7
let familia=['Emilio','Joaquina','Jose','Maria Jesus','Fran']
for (let i=0;i<5;i++){
  console.log(familia[i]);
}

//Ejercicio 9
let edad= Number(prompt('Introduce una edad:'));
let añosPerro= edad*9;
console.log(`Tu edad de ${edad} son ${añosPerro} años perro`);
*/
let minutos=Number(prompt('Introduce los minutos:'));
let segundo=minutos*60;
console.log(`${minutos} minutos equivalen a ${segundo} segundos`);