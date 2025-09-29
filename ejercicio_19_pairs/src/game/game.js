import Box from "../box/box.js";
import shuffle from "../utils/utils.js";

class GameLogic {
  #rows;
  #cols;
  element;
  boxes;

  constructor(rows, cols, element) {
    this.#rows = rows;
    this.#cols = cols;
    this.element = element;
    this.boxes = [];
  }

  // 🔑 Getters para exponer filas y columnas
  get rows() {
    return this.#rows;
  }

  get cols() {
    return this.#cols;
  }

  createColors() {
    const colors = [];
    for (let i = 0; i < (this.#rows * this.#cols) / 2; i++) {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      colors.push(`rgb(${red},${green},${blue})`);
    }
    return shuffle([...colors, ...colors]);
  }

  createBoxes() {
    const colors = this.createColors();
    for (let i = 0; i < this.#rows; i++) {
      for (let j = 0; j < this.#cols; j++) {
        let color = colors.shift();
        let box = new Box(i, j, color);
        this.boxes.push(box);
      }
    }
  }

  static getRowsCols() {
    let rows = parseInt(prompt("Indica el número de filas"));
    let cols = parseInt(prompt("Indica el número de columnas"));
    while ((rows * cols) % 2 !== 0) {
      rows = parseInt(prompt("Indica el número de filas"));
      cols = parseInt(prompt("Indica el número de columnas"));
    }
    return { rows, cols };
  }

  // 🔑 Ahora la lógica de comparar cajas va aquí
  checkOpenBoxes() {
    let openBoxes = this.boxes.filter(
      (box) => box.open && box.match === false
    );

    if (openBoxes.length === 2) {
      const [box1,box2]=openBoxes
      if (box1.color === box2.color) {
        // ✅ Son iguales → marcamos como emparejadas
        box1.match=true
        box2.match=true
      } else {
        // ❌ No son iguales → cerramos después de un tiempo
       setTimeout(() => {
        box1.resetcolor()
        box2.resetcolor()
        box1.open=false
        box2.open=false
       }, 500);
      }
    }
  }
}

class GameDom {
  constructor(gameLogic) {
    this.gameLogic = gameLogic; // 🔗 Guardamos la instancia de GameLogic
  }

  setCSSBoxTemplates(container) {
    container.style.gridTemplateColumns = `repeat(${this.gameLogic.cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${this.gameLogic.rows}, 1fr)`;
  }

  paintboxes() {
    let container = this.gameLogic.element;
    this.setCSSBoxTemplates(container);

    this.gameLogic.boxes.forEach((box) => {
      let newBox = document.createElement("div");
      newBox.classList.add("box");
      box.element = newBox;

      // Aquí es donde el box debería llamar a gameLogic.checkOpenBoxes()
      box.eventChangeColor(() => {
        this.gameLogic.checkOpenBoxes();
      });

      container.appendChild(newBox);
    });
  }
}

export { GameLogic, GameDom };

