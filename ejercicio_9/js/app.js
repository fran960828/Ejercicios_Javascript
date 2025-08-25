// Ejercicio 1
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayDuplicado = arrayOriginal.reduce((acumulador, numero) => {
  let duplicado = numero * 2;
  acumulador.push(duplicado);
  return acumulador;
}, []);
// console.log(arrayDuplicado);
//Ejercicio 2
let suma = arrayDuplicado.reduce(
  (acumulador, numero) => (acumulador += numero)
);
// console.log(suma);
// Ejercicio 3
let arrayPares = arrayOriginal.filter((numero) => numero % 2 == 0);
// console.log(arrayPares);
// Ejercicio 4
// let numeroUsuario = Number(prompt("Introduce un número"));
// let verdaderoFalso = arrayOriginal.some((numero) => numero === numeroUsuario);
// console.log(verdaderoFalso);
// Ejercicio 6
arrayDescendente = arrayOriginal.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(arrayDescendente);
// Ejercicio 7
const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];
let arrayUnion = [...array1, ...array2];
function multiplosTres(array) {
  return array.reduce((acumulador, numero) => {
    if (numero % 3 == 0 && numero % 5 != 0 && !acumulador.includes(numero)) {
      acumulador.push(numero);
      return acumulador;
    }
    return acumulador;
  }, []);
}
console.log(multiplosTres(arrayUnion));
