// // EJERCICIO 1
// const primerP = document.querySelector("p");
// // primerP.textContent = "Hola que tal";

// // EJERCICIO 2
// const segundoA = document.querySelector("p a:last-child");
// segundoA.setAttribute("href", "https://www.google.com");

// // EJERCICIO 3
// const penultimoHijo = document.querySelector("#milista li:nth-child(3)");

// // EJERCICIO 4
// const ultimoP = document.querySelector("body > p:last-of-type");
// ultimoP.removeAttribute("class");

// // EJERCICIO 5
// const h3Creado = document.createElement("h3");
// h3Creado.textContent = "Soy el último elemento h3";
// ultimoP.after(h3Creado);

// // EJERCICIO 6
// const primerSpan = document.createElement("span");
// primerSpan.textContent = "soyNuevo";
// h3Creado.prepend(primerSpan);

// // EJERCICIO 7
// const segundoP = document.querySelector("body p:nth-of-type(2)");
// const enlaceCreado = document.createElement("a");
// enlaceCreado.textContent = " Aqui ";
// enlaceCreado.setAttribute("href", "https://www.google.com");
// segundoP.replaceChildren(enlaceCreado);

// // EJERCICIO 8
// pHero = document.querySelectorAll(".hero p");

// for (element of pHero) {
//   if (element.getAttribute("class") !== null) {
//     element.remove();
//   }
// }

// // EJERCICIO 9
// const lastBody = document.querySelector("body > p:last-of-type");

// // Ejercicio 10
// const primerAdyacente = primerP.nextElementSibling;

// // EJERCICIO 11
// lastBody.remove();

// // EJERCICIO 12
// const imagenes = document.querySelectorAll("img");
// for (let imagen of imagenes) {
//   if (imagen.getAttribute("src") === "cambiame") {
//     imagen.setAttribute("src", "cambiado");
//   }
// }

// // EJERCICIO 13
// primerP.classList.add("clasejemplo");

// // EJERCICIO 14
// let liCreado = document.createElement("li");
// liCreado.textContent = "tercer elemento";

// let listaUl = document.querySelectorAll("ul");

// for (let elemento of listaUl) {
//   if (elemento.children.length === 2) {
//     // Clonamos el li para poder añadirlo a más de un <ul>
//     let nuevoLi = liCreado.cloneNode(true);
//     elemento.append(nuevoLi);
//   }
// }
// // EJERCICIO 15
// const padrePrimerP = primerP.parentElement;

// // EJERCICIO 16
// const hermanoAnteriorP = primerP.previousElementSibling;

// // EJERCICIO 17
// divContainer = document.querySelector(".container");
// divContainer.setAttribute("style", "background-color:red");

// // EJERCICIO 18 y 23
// pText = document.querySelector("#text");
// pText.innerText = "https://www.google.com";
// pText.classList.toggle("portatil");

// // EJERCICIO 19
// divEustakio = document.querySelectorAll(".eustakio");

// // EJERCICIO 24
// const primerLi = document.querySelector("li");
// const padrePrimerLi = primerLi.parentElement;

// // EJERCICIO 25
// const segundoLi = document.querySelector(".lista_ordenada ol li:last-child");
// const listaOl = document.querySelector(".lista_ordenada ol");
// if (listaOl.children.length === 2) {
//   const liIntermedio = document.createElement("li");
//   liIntermedio.textContent = "Elemento intermedio";
//   segundoLi.before(liIntermedio);
// }

// // EJERCICIO 26
// ultimoP.classList.add("azul");

// // EJERCICIO 27
// const todosDiv = document.querySelectorAll("div");
// for (let div of todosDiv) {
//   if (div.hasAttribute("class") === true) {
//     div.classList.add("container");
//   }
// }

// // EJERCICIO 28
// const ultimaImg = document.querySelector(".imagen2 img");
// console.log(ultimaImg.getAttribute("alt"));

// // EJERCICIO 29
// const spanDado = document.querySelector(".eustakio .subhero #primerspan");
// for (let attr of spanDado.getAttributeNames()) {
//   console.log(attr, spanDado.getAttribute(attr));
// }

// // EJERCICIO 30
// const unicoH1 = document.querySelector("h1");
// unicoH1.setAttribute("style", "font-size:40px;color:orange;text-align:right");

// // EJERCICIO 31
// const parrafos = document.querySelector("#parrafos");
// const parrafo3 = document.createElement("p");
// parrafo3.textContent = "Hola soy el tres";
// parrafos.append(parrafo3);

// // EJERCICIO 32
// const parrafo2 = document.querySelector("#parrafos p:last-child");
// const parrafoMedio = document.createElement("p");
// parrafoMedio.textContent = "Hola soy el uno y medio";
// parrafo2.before(parrafoMedio);

// // EJERCICIO 34
// const primerElementoClass = document.querySelector("div");
// primerElementoClass.remove();

// // EJERCICIO 35
// const primerLiLista = document.querySelector("li");
// const primerEnlace = document.createElement("a");
// primerEnlace.setAttribute("href", "www.google.es");
// primerLiLista.replaceWith(primerEnlace);

// // EJERCICIO 36
// const imagenes = document.querySelectorAll("img");
// for (let imagen of imagenes) {
//   imagen.removeAttribute("title");
// }

// // EJERCICIO 37
// const todosP = document.querySelectorAll("p");
// todosP.forEach((p) => {
//   p.textContent += ".";
// });

// // EJERCICIO 38
// const articleOferta = document.querySelectorAll("article.oferta");
// articleOferta.forEach((articulo) => {
//   articulo.setAttribute("data-iva", "0");
// });

// // EJERCICIO 39
// tercerLi = document.querySelector("ul li:nth-of-type(3)");
// tercerLi.textContent += " Modificando";

// EJERCICIO 41
const divInsertado = document.createElement("div");
divInsertado.setAttribute("class", "pepaino");
divInsertado.setAttribute("style", "border:1px solid red");
divInsertado.innerHTML =
  '<p class="div"> primer Hijo insertado</p><p style="color:red">Segundo Hijo insertado</p>';
const body = document.querySelector("body");
body.prepend(divInsertado);
