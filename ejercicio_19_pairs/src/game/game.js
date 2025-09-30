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
    if (localStorage.getItem("boxes") !== null) {
      let boxes = JSON.parse(localStorage.getItem("boxes"));
      boxes.map((box) => {
        let newBox = new Box(box.row, box.col, box.color, box.open, box.match);
        this.boxes.push(newBox);
      });
    } else {
      const colors = this.createColors();
      for (let i = 0; i < this.#rows; i++) {
        for (let j = 0; j < this.#cols; j++) {
          let color = colors.shift();
          let box = new Box(i, j, color);
          this.boxes.push(box);
        }
      }
      this.localStorageboxes();
    }
  }

  static getRowsCols() {
    if (localStorage.getItem("rowscols")) {
      return JSON.parse(localStorage.getItem("rowscols"));
    } else {
      let rows = parseInt(prompt("Indica el número de filas"));
      let cols = parseInt(prompt("Indica el número de columnas"));
      while ((rows * cols) % 2 !== 0) {
        rows = parseInt(prompt("Indica el número de filas"));
        cols = parseInt(prompt("Indica el número de columnas"));
      }
      localStorage.setItem("rowscols", JSON.stringify({ rows, cols }));

      return { rows, cols };
    }
  }

  // 🔑 Ahora la lógica de comparar cajas va aquí
  checkOpenBoxes() {
    let openBoxes = this.boxes.filter((box) => box.open && box.match === false);

    if (openBoxes.length === 2) {
      const [box1, box2] = openBoxes;
      if (box1.color === box2.color) {
        // ✅ Son iguales → marcamos como emparejadas
        box1.match = true;
        box2.match = true;
        this.localStorageboxes();
      } else {
        // ❌ No son iguales → cerramos después de un tiempo
        setTimeout(() => {
          box1.resetcolor();
          box2.resetcolor();
        }, 500);
      }
    } else {
      this.localStorageboxes();
    }
  }
  checkFinishGame() {
    let matchedboxes = this.boxes.filter((box) => box.match === false);
    if (matchedboxes.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  localStorageboxes() {
    let boxes = this.boxes.map((box) => {
      return {
        row: box.row,
        col: box.col,
        open: box.open,
        match: box.match,
        color: box.color,
      };
    });
    localStorage.setItem("boxes", JSON.stringify(boxes));
  }
  removeLocalStorage() {
    localStorage.removeItem("boxes");
    localStorage.removeItem("rowscols");
    localStorage.removeItem("timer");
    location.reload();
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
      if (box.open || box.match) {
        newBox.style.backgroundColor = box.color;
      } else {
        newBox.style.backgroundColor = "black";
      }
      // Aquí es donde el box debería llamar a gameLogic.checkOpenBoxes()
      box.eventChangeColor();

      container.appendChild(newBox);
    });
  }
}

export { GameLogic, GameDom };
