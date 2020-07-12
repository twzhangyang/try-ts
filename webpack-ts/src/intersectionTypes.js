import * as _ from 'lodash';
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
function compose(obj1, obj2) {
    return _.assignIn({}, obj1, obj2);
}
const monster = compose(new Cat('Mitzy', 9), new Dog('Sparky', false));
console.log(monster.name);
console.log(monster.numberOfLives);
console.log(monster.isBarkingOnNeighbors);
function destroyIfTooLong(obj) {
    if (obj.length > 1000) {
        obj.destroy();
    }
}
//# sourceMappingURL=intersectionTypes.js.map