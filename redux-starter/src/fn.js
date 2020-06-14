console.log("Hello World!");

const person = { name: "John" ,
  address: {
    country: "USA",
    city: "San Francisco"
  }
}
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
console.log(updated);

const updated2 = {...person, name: "Bob" };
console.log(updated2);

const updated3 = {
  ...person,
  address: {
    ...person.address,
    city: "New York"
  },
  name: "Tom"
};
console.log(updated3);

const number = [1, 2, 3];
const added = [...number, 4];
const index = number.indexOf(2);
const added2 = [...number.slice(0, index), 4, ...number.slice(index)];
console.log(added2);

const removed = number.filter(n => n !== 2);
const updated4 = number.map(n => n === 2 ? 20 : n); 



