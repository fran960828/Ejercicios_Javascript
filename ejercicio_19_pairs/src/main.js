import "../sass/style.scss";
import { GameLogic, GameDom } from "./game/game.js";

// Pedimos filas y columnas
const { rows, cols } = GameLogic.getRowsCols();

// Creamos el contenedor (ya en HTML o dinámicamente)
const tablero = document.getElementById("tablero");

// Creamos la lógica
const gameLogic = new GameLogic(rows, cols, tablero);

// Creamos el DOM y pintamos
const gameDom = new GameDom(gameLogic);
gameLogic.createBoxes();
gameDom.paintboxes();
tablero.addEventListener('click',()=>{
gameLogic.checkOpenBoxes();
})

