// Ejercicio 1
const frutas = [];
frutas.push("Manzana", "Pera", "Uva");
// Ejercicio 2
frutas.unshift("Sandia");
// Ejercicio 3
frutas.pop();
// Ejercicio 4
frutas.shift();
// Ejercicio 5
const colores = ["rojo", "verde", "azul", "amarillo"];
colores.splice(2, 1);
// Ejercicio 6
colores.splice(1, 0, "Morado");
// Ejercicio 7
const numeros = [1, 2, 3, 4, 5];
numeros2 = numeros.slice(0, numeros.length);
numeros.splice(0, numeros.length);
// Ejercicio 8
const animales1 = ["Perro", "Gato"];
const animales2 = ["Loro", "Conejo"];
// console.log(animales1.concat(animales2));
// Ejercicio 9
const letras = ["a", "b", "c", "d", "e"];
const letras2 = letras.slice(0, 3);
// Ejercicio 10
const palabras = ["Hola", "Mundo"];
let cadena = palabras.join(" ");
// Ejercicio 11
let numerosOrdenados = [4, 2, 8, 1, 5];
numerosOrdenados = numerosOrdenados.sort();
// Ejercicio 12
let nombresOrdenados = ["Carlos", "Ana", "Pedro", "Luis"];
nombresOrdenados = nombresOrdenados.sort();
// Ejercicio 13
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Pedro", edad: 30 },
];
personas = personas.sort((array1, array2) => {
  if (array1.edad < array2.edad) {
    return -1;
  } else if (array1.edad > array2.edad) {
    return 1;
  } else {
    return 0;
  }
});
// Ejercicio 14
let materias = ["mates", "lengua", "historia", "ingles"];
let indiceMateria = materias.indexOf("historia");
// Ejercicio 15
let numeros3 = [3, 7, 11, 15, 20];
let primerMayor = numeros3.find((a) => {
  if (a > 10) {
    return a;
  }
});
// Ejercicio 16
let productos = [
  { id: 1, nombre: "lápiz" },
  { id: 2, nombre: "cuaderno" },
  { id: 3, nombre: "borrador" },
];
let busqueda = productos.find((objeto) => {
  if (objeto.nombre === "cuaderno") {
    return objeto;
  }
});
// Ejercicio 18
const original = [1, 2, 3];
const copia = [...original];
// Ejercicio 19
const a = [1, 2];
const b = [3, 4];
c = [...a, ...b];
// Ejercicio 20
const base = [1, 2];
const nuevo = [...base, 3, 4];
console.log(nuevo);
