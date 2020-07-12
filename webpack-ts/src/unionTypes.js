export class Cat {
    constructor(name, numberOfLives) {
        this.name = name;
        this.numberOfLives = numberOfLives;
    }
}
export class Dog {
    constructor(name, isBarkingOnNeighbors) {
        this.name = name;
        this.isBarkingOnNeighbors = isBarkingOnNeighbors;
    }
}
export class Person {
    constructor(name, age) {
        this.name = name;
    }
}
function rename(thing, newName) {
    thing.name = newName;
}
rename(new Cat('Fluffy', 9), 'Mitzy');
rename(new Dog('Spark', true), 'Speedy');
rename(new Person('Ben', 18), 'John');
function printDate(date) {
    console.log(date);
}
printDate(new Date());
printDate('12/05/2017');
// printDate({});
//# sourceMappingURL=unionTypes.js.map