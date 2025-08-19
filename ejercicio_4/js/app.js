//Ejercicio 1

for (let i=0;i<3;i++){
  numero=Number(prompt(`Introduce el numero ${i+1}`));
  if (numero>100){
    console.log(`el numero ${numero} es mayor que 100`);
  }
}
//Ejercicio 2
let rangoInferior=Number(prompt('Introduce el rango inferior'));
let rangoSuperior=Number(prompt('Introduce el rango superior'));
let numero=Number(prompt('Introduce el numero'));
if (numero>rangoInferior && numero<=rangoSuperior){
  console.log(`${numero} esta dentro del rango`);
}else {
  console.log(`${numero} no esta dentro del rango`);
}

//Ejercicio 3
let pregunta1=prompt('Te has hecho tatuajes recientemente').toLowerCase();
let pregunta2=prompt('Tienes o has tenido hepatitis').toLowerCase();
let pregunta3=prompt('tienes anemia').toLowerCase();
if (pregunta1==='si' || pregunta2==='si' || pregunta3==='si'){
  console.log('No puedes donar');
}else{
  console.log('Puedes donar');
}

//Ejercicio 4
let usuarioRegistrado='Francisco';
let contrasenaRegistrada='Navarro';
let usuario=prompt('Introduce tu usuario');
let contrasena=prompt('Introduce tu contraseña');
if (usuarioRegistrado===usuario && contrasenaRegistrada===contrasena){
  console.log('Acceso Permitido');
}else {
  console.log('Acceso Denegado');
}

//Ejercicio 5
let aceite=prompt('El auto tiene el aceite cambiado').toLowerCase();
let agua=prompt('El auto tiene suficiente agua').toLowerCase();
let neumaticos=prompt('El auto tiene los neumaticos con presión').toLowerCase();
if (aceite==='si' && agua==='si' && neumaticos==='si'){
  console.log('EL auto no tiene que hacer mantenimiento')
}else {
  console.log('EL auto tiene que hacer mantenimiento')
}

//Ejercicio 7
let parcial1=Number(prompt('Introduce la nota del parcial 1'));
let parcial2=Number(prompt('Introduce la nota del parcial 2'));
let parcial3=Number(prompt('Introduce la nota del parcial 3'));

if (parcial1>=8 && parcial2>=8){
  console.log('Promociona la catedra');
}else if (parcial1>=8 && parcial3>=8) {
  console.log('Promociona la catedra');
}else if (parcial2>=8 && parcial3>=8) {
  console.log('Promociona la catedra');
}else {
  console.log('No promociona la catedra');
}
//ejercicio 8
let numero1=Number(prompt('Introduce el numero 1'));
let numero2=Number(prompt('Introduce el numero 2'));
if (numero1>numero2){
  console.log(`${numero1} es mayor`);
} else if (numero1<numero2){
  console.log(`${numero2} es mayor`);
} else {
  console.log('Ambos son iguales');
}
 //ejercicio 9
 let numero1=Number(prompt('Introduce el numero 1'));
let numero2=Number(prompt('Introduce el numero 2'));
let numero3=Number(prompt('Introduce el numero 3'));
if (numero1>numero2 && numero1>numero3){
  console.log(`el primer numero ${numero1} es el mayor de los tres`);
} else if (numero1<numero2 && numero2>numero3){
  console.log(`el segundo numero ${numero2} es el mayor de los tres`);
} else if (numero1<numero3 && numero2<numero3){
  console.log(`el tercer numero ${numero3} es el mayor de los tres`);
}

if (numero1===numero2){
  console.log('el numero 1 y 2 son iguales')
}else if (numero1==numero3){
  console.log('el numero 1 y 3 son iguales')
}else if (numero2==numero3){
  console.log('el numero 2 y 3 son iguales')
}

//Ejercicio 13
let casos=['caso 1','caso 2','caso 3','caso 4'];
let valoracionCaso=0
for (let i=0;i<4;i++){
  while (valoracionCaso<1 || valoracionCaso>10){
    valoracionCaso=Number(prompt(`Valora el ${casos[i]}`));
    if (valoracionCaso<=5 && valoracionCaso>=1){
      console.log('Mejoraremos el producto, le agradecemos la comprension');
    } else if (valoracionCaso>5 && valoracionCaso<=10){
      console.log('Agradecemos su valoración');
    } else {
      console.log('Error')
    }
  }
  valoracionCaso=0
}
