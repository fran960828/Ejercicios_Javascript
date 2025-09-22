// /*
// 1. Crea una página HTML con un contenedor de una imagen. Debes tener preparadas diez
// imágenes y en función de la tecla numérica que se pulse (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// debe aparecer esa imagen en el contenedor. Cuando se pulse otro número, debe vaciarse el contenedor
// y cargarse de nuevo su imagen correspondiente.
// */
// contenedorImagenes = document.querySelector("div.imagenes");
// imagenes = document.querySelectorAll(".imagenes__item");
// function ocultarImagenes(imagenes) {
//   imagenes.forEach((element) => {
//     element.style.display = "none";
//   });
// }

// document.body.addEventListener("keydown", (event) => {
//   indexImage = parseInt(event.key);
//   ocultarImagenes(imagenes);
//   if (indexImage >= 0 && indexImage < 10) {
//     imagenes[indexImage].style.display = "inline-block";
//   }
// });
// /*
// 2. Crea una aplicación cuyo código HTML contenga únicamente una caja roja. Cada vez que
// el usuario pulse algunas de las teclas de los cursores (flecha arriba, flecha abajo, flecha
// a derecha, flecha a izquierda) la caja debe desplazarse 10 px en la dirección establecida por el cursor.
// */
// cajaRoja = document.querySelector("div.caja");
// let x = 0;
// let y = 0;
// document.body.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowUp":
//       y -= 10;
//       break;
//     case "ArrowDown":
//       y += 10;
//       break;
//     case "ArrowLeft":
//       x -= 10;
//       break;
//     case "ArrowRight":
//       x += 10;
//       break;
//   }
//   cajaRoja.style.transform = `translate(${x}px, ${y}px)`;
// });
// /*
// 3. Escribe un programa que permita ordenar los elementos de una lista desordenada.
//  Cada elemento debe tener un aspa en su extremo derecho para poder ser eliminado. Además, al final habrá un botón para añadir un elemento.
//  El texto del nuevo elemento se le debe pedir al usuario por teclado.*/

// const divPadre = document.querySelector("div.lista");
// const botonAñadir = document.querySelector(".add");

// botonAñadir.addEventListener("click", () => {
//   const nuevoLi = document.createElement("li");
//   nuevoLi.innerHTML =
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. <button class="eliminar">X</button>';
//   divPadre.append(nuevoLi);
// });

// // Delegación: escuchamos clics en el contenedor
// divPadre.addEventListener("click", (evento) => {
//   // el if nos permite que aunque hagamos clic en cualquier lugar del div solo al darle al boton elimine la lista
//   if (evento.target.classList.contains("eliminar")) {
//     evento.target.parentElement.remove();
//   }
// });

/*
4. Elabora un programa que vaya rellenando un párrafo de forma dinámica con 
todas las le- tras que vaya pulsando el usuario sobre cualquier elemento
de la página. Al final del párrafo debes incluir un botón para limpiar 
el contenido del párrafo.
*/
// parrafoDinamico = document.querySelector(".dinamico");
// btnLimpiar = document.querySelector(".clear");
// document.body.addEventListener("keydown", (event) => {
//   if (event.key.length === 1) {
//     parrafoDinamico.append(event.key);
//   } else if (event.key === "Enter") {
//     parrafoDinamico.append("\n");
//   }
// });

// btnLimpiar.addEventListener("click", () => {
//   parrafoDinamico.textContent = "";
// });
/*
Crea una rutina que no permita que el ratón se coloque encima de una caja azul
 de 100 x 100 px. Cada vez que el ratón intente colocarse encima, 
 la posición de la caja debe cam- biar aleatoriamente por la página.
*/
function moverAleatoriamente(caja) {
  const maxX = window.innerWidth - caja.offsetWidth;
  const maxY = window.innerHeight - caja.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  caja.style.left = x + "px";
  caja.style.top = y + "px";
}
caja = document.querySelector(".aleatorio");
caja.addEventListener("mouseenter", (event) => {
  moverAleatoriamente(event.currentTarget);
});
