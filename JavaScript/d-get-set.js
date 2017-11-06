'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set side(l) {
    this.width = l;
    this.height = l;
  }
}

const p1 = new Rect(10, 20, 50, 100);
console.log(p1.area);
p1.side = 150;
console.log(p1.area);
