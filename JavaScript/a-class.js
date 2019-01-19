'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
}

const p1 = new Square(10, 20, 50);

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
