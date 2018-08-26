'use strict';

const point = (x, y) => {
  const p = {};

  p.move = (dx, dy) => {
    x += dx;
    y += dy;
  };

  p.toString = () => `[${x}, ${y}]`;

  return p;
};

const p1 = point(10, 20);
p1.move(-5, 10);

console.log(p1); // { move: [Function], toString: [Function] }
console.log(p1.toString()); // [5, 30]
console.log(p1 + ''); // [5, 30]
