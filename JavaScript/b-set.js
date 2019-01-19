'use strict';

class Rect {
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}

const p1 = { x: 10, y: 20, width: 50, height: 50 };
Object.setPrototypeOf(p1, Rect.prototype);
//p1.__proto__ = Rect.prototype;

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
