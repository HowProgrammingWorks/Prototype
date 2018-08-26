'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function(obj) {
  const { x, y } = obj;
  return new Point(x, y);
};

Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`;
};

console.log('function prototype:', (function() {}).prototype); // function prototype: {}
console.log('lambda prototype:', (() => {}).prototype); // lambda prototype: undefinded

console.log('Point prototype:', Point.prototype); // Point prototype: Point { move: [Function], toString: [Function] }
console.log('move prototype:', Point.prototype.move.prototype); // move prototype: {}

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1); // Point { x: 5, y: 30 }
console.log(p1.toString()); // [5, 30]
console.log(p1 + ''); // [5, 30]
