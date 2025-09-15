// EJERCICIO 1
const primerP = document.querySelector("p");
// primerP.textContent = "Hola que tal";

// EJERCICIO 2
const segundoA = document.querySelector("p a:last-child");
segundoA.setAttribute("href", "https://www.google.com");

// EJERCICIO 3
const penultimoHijo = document.querySelector("#milista li:nth-child(3)");

// EJERCICIO 4
const ultimoP = document.querySelector("body > p:last-of-type");
ultimoP.removeAttribute("class");

// EJERCICIO 5
const h3Creado = document.createElement("h3");
h3Creado.textContent = "Soy el último elemento h3";
ultimoP.after(h3Creado);

// EJERCICIO 6
const primerSpan = document.createElement("span");
primerSpan.textContent = "soyNuevo";
h3Creado.prepend(primerSpan);

// EJERCICIO 7
const segundoP = document.querySelector("body p:nth-of-type(2)");
const enlaceCreado = document.createElement("a");
enlaceCreado.textContent = " Aqui ";
enlaceCreado.setAttribute("href", "https://www.google.com");
segundoP.replaceChildren(enlaceCreado);

// EJERCICIO 8
pHero = document.querySelectorAll(".hero p");

for (element of pHero) {
  if (element.getAttribute("class") !== null) {
    element.remove();
  }
}

// EJERCICIO 9
const lastBody = document.querySelector("body > p:last-of-type");

// Ejercicio 10
const primerAdyacente = primerP.nextElementSibling;

// EJERCICIO 11
lastBody.remove();

// EJERCICIO 12
const imagenes = document.querySelectorAll("img");
for (let imagen of imagenes) {
  if (imagen.getAttribute("src") === "cambiame") {
    imagen.setAttribute("src", "cambiado");
  }
}

// EJERCICIO 13
primerP.classList.add("clasejemplo");

// EJERCICIO 14
let liCreado = document.createElement("li");
liCreado.textContent = "tercer elemento";

let listaUl = document.querySelectorAll("ul");

for (let elemento of listaUl) {
  if (elemento.children.length === 2) {
    // Clonamos el li para poder añadirlo a más de un <ul>
    let nuevoLi = liCreado.cloneNode(true);
    elemento.append(nuevoLi);
  }
}
// EJERCICIO 15
const padrePrimerP = primerP.parentElement;

// EJERCICIO 16
const hermanoAnteriorP = primerP.previousElementSibling;

// EJERCICIO 17
divContainer = document.querySelector(".container");
divContainer.setAttribute("style", "background-color:red");

// EJERCICIO 18 y 23
pText = document.querySelector("#text");
pText.innerText = "https://www.google.com";
pText.classList.toggle("portatil");

// EJERCICIO 19
divEustakio = document.querySelectorAll(".eustakio");

// EJERCICIO 24
const primerLi = document.querySelector("li");
const padrePrimerLi = primerLi.parentElement;
