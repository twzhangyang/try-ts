const sym1 = Symbol(1);
const sym2 = Symbol(1);
const sym3 = Symbol('I am a symbol');
const sym4 = Symbol('I am a symbol');

console.log(sym1 === sym2);

const propSymb = Symbol();
const funcSymb = Symbol();

export class SomeClass {
  constructor() {
    this[propSymb] = 123;
  }

  [funcSymb](): string {
    return 'I am a function value';
  }
}

const someObj = new SomeClass();
console.log(someObj[propSymb]);
console.log(someObj[funcSymb]());

console.log(SomeClass[Symbol.hasInstance](someObj))
