'use strict';

const data = [
  ['Marcus Aurelius', '121-04-26', 'Rome'],
  ['Commodus Antoninus', '161-08-31', 'Rome'],
  ['Victor Glushkov', '1923-08-24', 'Rostov on Don'],
  ['Ibn Arabi', '1165-11-16', 'Murcia'],
  ['Mao Zedong', '1893-12-26', 'Shaoshan'],
  ['Rene Descartes', '1596-03-31', 'La Haye en Touraine']
];

class Person {
  get name() {
    return this[0];
  }

  get birth() {
    return this[1];
  }

  get city() {
    return this[2];
  }

  get age() {
    const difference = new Date() - new Date(this.birth);
    return Math.floor(difference / 31536000000);
  }

  toString() {
    return this.name + ' age is ' + this.age;
  }
}

const query = person => (
  person.name !== '' &&
  person.age > 18 &&
  person.city === 'Rome'
);

console.dir(data);

data.forEach(person => {
  Object.setPrototypeOf(person, Person.prototype);
  // person.__proto__ = Person.prototype
});

const res = data.filter(query);
console.log(res.join('\n'));
