'use strict';

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.toString = function() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  };
}

const p1 = new Rect(10, 20, 50, 50);

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
