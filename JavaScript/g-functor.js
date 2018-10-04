'use strict';

class Functor extends Function {
  method() {
    console.log('Functor.prototype.method');
    console.dir({
      property: this.property,
      method: this.method,
    });
    this(); // you can call this as a function
  }
}

const factory = () => {

  const functor = function() {
    console.log('functor');
    functor.property = 'value';
    console.dir({
      property: functor.property,
      method: functor.method,
    });
  };

  Object.setPrototypeOf(functor, Functor.prototype);
  return functor;

};

// Usage

const fn = factory();
fn();
fn.method();
