// Ejercicio 1
function isOdd(number) {
  return number % 2 === 1;
}
isOdd(3);
// Ejercicio 2
function inRange(number, min, max) {
  return number > min && number < max;
}
inRange(1, 2, 6);
// Ejercicio 3
function getBiggestNumber(numbers) {
  return Math.max(...numbers);
}
let numbers = [1, 2, 9, 4, 5, 6];
getBiggestNumber(numbers);
// Ejercicio 4
function getPercentage(number, percentage) {
  return number / percentage;
}
getPercentage(50, 10);
// Ejercicio 5
function getRandomColorSequence(colors, length) {
  let secuencia = [];
  for (let i = 0; i < length; i++) {
    let azar = Math.floor(Math.random() * colors.length);
    secuencia.push(colors[azar]);
  }
  return secuencia;
}
let colors = ["red", "blue", "yellow", "orange"];
console.log(getRandomColorSequence(colors, 7));
// Ejercicio 6
function getRockPaperScissorRandomSequence(length) {
  let options = ["piedra", "papel", "tijera"];
  let secuencia = [];
  for (let i = 0; i < length; i++) {
    let azar = Math.floor(Math.random() * options.length);
    secuencia.push(options[azar]);
  }
  return secuencia;
}
console.log(getRockPaperScissorRandomSequence(5));
// ejercicio 7
function filterNumberGreaterThan(numbers, filter) {
  return numbers.filter((number) => number > filter);
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterNumberGreaterThan(numbers, 5));
// Ejercicio 8
function getFactorial(number) {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(getFactorial(5));
// Ejercicio 9
function areArraysEqual(arrayA, arrayB) {
  return arrayA.every((a, index) => a === arrayB[index]);
}
let arrayA = [1, 2, 3, 4];
let arrayB = [1, 2, 5, 4];
console.log(areArraysEqual(arrayA, arrayB));
// Ejercicio 10
function toHackerSpeak(text) {
  const mapa = { a: "4", e: "3", i: "1", o: "0", s: "5" };
  return text
    .split("")
    .map((ch) => mapa[ch] || ch)
    .join("");
}

console.log(toHackerSpeak("i'm a hacker now"));
// ejercicio 11
function getFileExtension(file) {
  let index = file.split("").findIndex((ch) => ch === ".");
  if (index !== -1) {
    return file
      .split("")
      .slice(index + 1, file.length)
      .join("");
  }
}
console.log(getFileExtension("arrow.jpg"));
// Ejercicio 12
function flatArray(array) {
  return array.reduce((acumulador, subarr) => {
    return acumulador.concat(subarr);
  }, []);
}
array = [
  [1, 5, 4],
  [3, 10],
  [2, 5],
];
console.log(flatArray(array));
// Ejercicio 13
function removeDuplicates(array) {
  return new Set(array);
}
array = [4, 5, 10, 4, 10, 2];
console.log(removeDuplicates(array));
// Ejercicio 14
function countLetter(text, letter) {
  let arrayText = text.split("").filter((ch) => letter === ch);
  return arrayText.length;
}
console.log(countLetter("Hola como lo llevas", "a"));
// Ejercicio 15
function canPlay(hand, face) {
  let array1 = hand.reduce((acumulador, string) => {
    return acumulador.concat(string.split(" "));
  }, []);
  let array2 = face.split(" ");
  return array1.some(
    (elemento) => elemento === array2[0] || elemento === array2[1]
  );
}
console.log(canPlay(["yellow 3", "yellow 5", "blue 8"], "red 2"));
// Ejercicio 16
function removeWords(text, words) {
  return text
    .split(" ")
    .filter((word) => !words.includes(word))
    .join(" ");
}
console.log(removeWords("This is a really bad test", ["really", "bad"]));
// Ejercicio 17
function getRange(a, b) {
  const array = [];
  const step = a <= b ? 1 : -1;

  for (let i = a; step > 0 ? i <= b : i >= b; i += step) {
    array.push(i);
  }

  return array;
}

console.log(getRange(5, 10)); // [5, 6, 7, 8, 9, 10]
console.log(getRange(10, 5)); // [10, 9, 8, 7, 6, 5]
