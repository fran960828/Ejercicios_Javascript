import Box from "../box/box.js";
import shuffle from "../utils/utils.js";

class GameLogic {
  #rows;
  #cols;
  element;
  #boxes;

  constructor(rows, cols, element) {
    this.#rows = rows;
    this.#cols = cols;
    this.element = element;
    this.#boxes = [];
  }

  createColors() {
    const colors = [];
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    for (let i = 0; i < (this.#rows * this.#cols) / 2; i++) {
      colors.push(`rgb(${red},${green},${blue})`);
    }
    let arrayColor = shuffle([...colors, ...colors]);
    return arrayColor;
  }
  createBoxes() {
    const colors = this.createColors();
    for (let i = 0; i < this.#rows; i++) {
      for (let j = 0; j < this.#cols; j++) {
        let color = colors.shift();
        let box = new Box(i, j, color);
        this.#boxes.push(box);
      }
    }
  }
}

export default GameLogic;
