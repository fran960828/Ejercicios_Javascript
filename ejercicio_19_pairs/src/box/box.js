class Box {
  #row;
  #col;
  #color;
  #open;
  #match;
  #element;
  constructor(row, col, color, open = false, match = false) {
    this.#row = row;
    this.#col = col;
    this.#color = color;
    this.#open = open;
    this.#match = match;
  }
  get row() {
    return this.#row;
  }
  get col() {
    return this.#col;
  }
  get color() {
    return this.#color;
  }
  get open() {
    return this.#open;
  }
  get match() {
    return this.#match;
  }
  set element(element){
    this.#element=element
  }
  set match(match){
    this.#match=match
  }
  eventChangeColor(){
    if (this.#element){
      this.#element.addEventListener('click',(e)=>{
        if (!this.#open){
          this.#element.style.backgroundColor=this.#color
          this.#open=true
        }
        return false
      })
    } 
  }
  resetcolor(){
    this.#element.style.backgroundColor='black'
    this.#open=false
  }
}

export default Box;
