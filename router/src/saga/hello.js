const sayHi = () => {
  return "hi"
  return "world"
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
  yield "hi";
  yield "I";
  yield "Am";
  return "hello";
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

const resultGenerator2 = sayHiGenerator();

for(const iterator of resultGenerator2){
  console.log(iterator);
}

function* newGenerator() {
  yield "something";
  const final = yield "give me value";
  return "final value"
}

const newGeneratorIt = newGenerator();

console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next());

