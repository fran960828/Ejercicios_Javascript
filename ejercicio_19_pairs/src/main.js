import "../sass/style.scss";
import { GameLogic, GameDom } from "./game/game.js";
import Timer from "./utils/timer.js";

// Pedimos filas y columnas
const { rows, cols } = GameLogic.getRowsCols();

// Creamos el contenedor (ya en HTML o dinámicamente)
const tablero = document.getElementById("tablero");

// Creamos la lógica
const gameLogic = new GameLogic(rows, cols, tablero);

// Creamos el DOM y pintamos
const gameDom = new GameDom(gameLogic);
// Creamos las cajas en la lógica
gameLogic.createBoxes();
// Pintamos las cajas en el DOM
gameDom.paintboxes();
// Iniciamos el temporizador
let temporizador = new Timer();
temporizador.start();
// Evento click en el tablero
tablero.addEventListener("click", () => {
  gameLogic.checkOpenBoxes();
  if (gameLogic.checkFinishGame()) {
    temporizador.stop();
    gameLogic.removeLocalStorage();
    alert("¡Has ganado!");
  }
});
// Comprobar juego ganado

// Botón de reset
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  gameLogic.removeLocalStorage();
});
