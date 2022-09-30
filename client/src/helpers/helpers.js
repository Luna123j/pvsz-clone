class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
  }

  draw(context) {
    context.strokeStyle = 'black';
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}

class Board {
  constructor(resouces){
    this.resouces = resouces || 100;
    this.score = 0;
  }


}

class Defender{
  
}