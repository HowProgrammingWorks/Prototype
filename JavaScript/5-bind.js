'use strict';

function move(x, y) {
  this.x += x;
  this.y += y;
}

function toString() {
  return `[${this.x}, ${this.y}]`;
}

const p1 = { x: 10, y: 20 };
const p1move = move.bind(p1);
const p1toString = toString.bind(p1);
p1move(-5, 10);

console.log(p1);
console.log(p1toString());
console.log(`${p1}`);
