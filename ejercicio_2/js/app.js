// Ejercicio 1 y 2
let mensaje = "HOLA MUNDO";
console.log(mensaje);
// Ejercicio 3
let nombre = prompt("Introduce tu nombre:");
let saludo = "Hola " + nombre + ", ¿cómo estás?";
console.log(saludo);

// Ejercicio 4
// Pedir el nombre al usuario
let operacion = ((3 + 2) / (2 * 5)) ** 2;
console.log("El resultado de la operación es: " + operacion);
// Ejercicio 5
let horasTrabajadas = prompt("Introduce el número de horas trabajadas:");
let salarioPorHora = prompt("Introduce el salario por hora:");
let salarioMensual = horasTrabajadas * salarioPorHora;
console.log("El salario mensual es: " + salarioMensual);
// Ejercicio 6
let peso = Number(prompt("Introduce tu peso en kg:"));
let altura = Number(prompt("Introduce tu altura en metros:"));
let imc = peso / altura ** 2;
console.log("Tu IMC es:" + imc.toFixed(2));

// Ejercicio 7
let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));
let cociente = (numero1 / numero2).toFixed(0);
let resto = (numero1 % numero2).toFixed(0);
console.log("El cociente de " + numero1 + " y " + numero2 + " es: " + cociente);
console.log("El resto de " + numero1 + " y " + numero2 + " es: " + resto);

// Ejercicio 8
let inversion = Number(prompt("Introduce la cantidad a invertir:"));
let interes = Number(prompt("Introduce el interés anual:"));
let anos = Number(prompt("Introduce el número de años:"));
let cantidadFinal = inversion * (1 + interes / 100) ** anos;
console.log(
  "La cantidad final tras " + anos + " años es: " + cantidadFinal.toFixed(2)
);
// Ejercicio 9
let numeroMuñecas = Number(prompt("Introduce el número de muñecas:"));
let numeroPayasos = Number(prompt("Introduce el número de payasos:"));
let pesoTotal = (numeroMuñecas * 75 + numeroPayasos * 112) / 1000;
console.log(
  "El peso total de los juguetes es: " + pesoTotal.toFixed(2) + " kg"
);
// Ejercicio 10
let barrasNoDia = Number(
  prompt("Introduce el número de barras de pan vendidas que no son del día:")
);
console.log("El precio de la barra de pan del día es: 3.49 €");
console.log("El descuento en barras que no son del día es del 60%");
let costeFinal = barrasNoDia * 3.49 * 0.4;
console.log(
  "la ganacia total por barras que no son del día es: " + costeFinal.toFixed(2)
);
