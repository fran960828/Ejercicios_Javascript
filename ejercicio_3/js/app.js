//Ejercicio 1
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

let minutos=Number(prompt('Introduce los minutos:'));
let segundo=minutos*60;
console.log(`${minutos} minutos equivalen a ${segundo} segundos`);
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

// Ejercicio 21
let segundos = Number(prompt("Introduce un número de segundos:"));

let horas = Math.trunc(segundos / 3600);            // horas completas
let minutos = Math.trunc((segundos % 3600) / 60);   // minutos restantes
let segRestantes = segundos % 60;                  // segundos restantes

// Función para poner singular o plural
function pluralizar(valor, singular, plural) {
  if (valor === 0) return "";
  if (valor === 1) return `${valor} ${singular}`;
  return `${valor} ${plural}`;
}

// Construimos la salida
let partes = [];
if (horas > 0) partes.push(pluralizar(horas, "hora", "horas"));
if (minutos > 0) partes.push(pluralizar(minutos, "minuto", "minutos"));
if (segRestantes > 0) partes.push(pluralizar(segRestantes, "segundo", "segundos"));

// Si todo es 0 (ej. entrada = 0)
if (partes.length === 0) partes.push("0 segundos");

// Mostrar resultado
console.log(partes.join(", "));
//Ejercicio 22
let texto=prompt('Ingrese un texto a continuación:');
let numeroCaracteres=texto.length;
console.log(numeroCaracteres);

//Ejercicio 23
let anosTrabajo=Number(prompt('Indica el numero de año que llevas trabajando en la empresa'));
let diasvacaciones=15
if (anosTrabajo>3){
  diasvacaciones+=(anosTrabajo-3)*2;
  console.log(diasvacaciones);
} else {
  console.log(diasvacaciones);
}

//Ejercicio 24
let habitacionesDobles=Number(prompt('Indica el número de habitaciónes dobles'));
let habitacionesTriples=Number(prompt('Indica el número de habitaciónes triples'));
let habitacionesCuadruples=Number(prompt('Indica el número de habitaciónes cuadruples'));
let habitacionesTotales=habitacionesCuadruples*4+habitacionesTriples*3+habitacionesDobles*2;
console.log(habitacionesTotales);

//Ejercicio 25
let dineroDisponible=Number(prompt('Cuanto dinero disponible tienes:'))
let servicio='';
let precio=0;
let servicios=[];
let precios=[];
for (let i=3;i>0;i--){
  console.log(`Te quedan ${i} servicios por pagar`);
  servicio=prompt('Ingresa el nombre del servicio');
  precio=Number(prompt(`Ingresa el precio de ${servicio}`));
  servicios.push(servicio)
  precios.push(precio)
  dineroDisponible-=precio
  console.log(`Dinero disponible restante: ${dineroDisponible}€`);
}
for (i=0;i<3;i++){
  console.log(`${i+1}.${servicios[i]}:${precios[i]}€`)
}
console.log(`El dinero restante son ${dineroDisponible}`);

//Ejercicio 26
let cantidadProducto=0;
let valorTotal=0;
let valorProductos=[10,20,30];
for (i=0;i<3;i++){
  cantidadProducto=Number(prompt(`Introduce la cantidad del producto ${i+1}`));
  console.log(`El valor del producto ${i+1} es ${valorProductos[i]}€`);
  valorTotal+=valorProductos[i]*cantidadProducto;
}
console.log(`El valor total de la compra es ${valorTotal} €`)
let cuotas=Number(prompt('En cuantas cuotas deseas pagarlo'))
console.log(`EL numero de cuotas a pagar es ${cuotas} cuotas
  con un valor por cuota de ${valorTotal/cuotas}€`);
