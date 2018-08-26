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

  get side() {
    if (this.width !== this.height) throw new Error('not a Square');
    return this.width;
  }
}

const p1 = new Rect(10, 20, 50, 100);
console.log(p1.area); // 5000
p1.side = 150;
console.log(p1.side); // 1150
console.log(p1.area); // 22500
