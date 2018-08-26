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

console.log(
  'Point prototype:',
  Point.prototype
); // Point prototype: Point {}
console.log(
  'move prototype:',
  Point.prototype.move.prototype
); // move prototype: undefined
console.log(
  'constructor prototype:',
  Point.constructor.prototype
); // constructor prototype: function () { [native code] }
console.log(
  'prototype constructor prototype:',
  Point.prototype.constructor.prototype
); // prototype constructor prototype : Point {}

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1); // Point { x: 5, y: 30 }
console.log(p1.toString()); // [5, 30]
console.log(p1 + ''); // [5, 30]
