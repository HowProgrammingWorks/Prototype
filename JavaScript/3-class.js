'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static from(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

const point1 = new Point(0, 0);
point1.move(1, -1);
point1.move(10, 0);

const point2 = Point.from(point1);
point2.move(-7, 25);

console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);
console.log('constructor prototype:', Point.constructor.prototype);

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
