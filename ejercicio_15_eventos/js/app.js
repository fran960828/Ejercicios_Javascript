function pulsado() {
  alert("tercer boton pulsado");
}
segundoBoton = document.getElementById("sB");
segundoBoton.onclick = () => alert("Hello");
// Tercer metodo usando addEventListener
tercerBoton = document.getElementsByTagName("button")[2];
tercerBoton.addEventListener("click", pulsado);
tercerBoton.addEventListener("click", (event) =>
  console.log("Estas pulsando el tercer boton\n", event.target)
);
tercerBoton.removeEventListener("click", pulsado);
