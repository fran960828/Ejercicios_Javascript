// funcion 1
const suma = (a, b) => a + b;
// funcion 2
const cuadrado = (numero) => numero * numero;
// funcion 3
const obtenerUsuario = (id) => ({ id: id, nombre: "usuario" + id });
// funcion 4
const procesarLista = (lista) => {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
};
// funcion 5
(() => {
  console.log("Ejecutando una IIFE");
})();
// funcion 6
const objeto = {
  id: 10,
  obtenerId: () => this.id,
};
// funcion 7
const temporizador = {
  mensaje: "Listo!",
  iniciar: function () {
    setTimeout(() => console.log(this.mensaje), 1000);
  },
};
