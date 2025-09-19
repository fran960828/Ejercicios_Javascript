// Ejercicio 1: Colorear el fondo cuando entra el raton
// y volver al color orignal al salir
const logo = document.querySelector("h1");
logo.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "red";
});
logo.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
});
const navegador = document.querySelector(".menu");
navegador.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "blue";
});
navegador.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
});
const seccion = document.querySelector(".hero");
seccion.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "yellow";
});
seccion.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
});
const tabla = document.getElementsByTagName("table")[0];
tabla.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "orange";
});
tabla.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
});
const formulario = document.getElementsByTagName("form")[0];
formulario.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "purple";
});
formulario.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
});
// EJERCICIO 2:Evitar que se desplege el menu contextual sobre ningun elemento
const hijos = document.body.children;
for (let hijo of hijos) {
  hijo.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log(
      `No se puede desplegar el context menu en ${event.target.tagName}`
    );
  });
}
