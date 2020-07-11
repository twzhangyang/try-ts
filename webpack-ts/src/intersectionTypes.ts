import * as _ from 'lodash';

export class Cat {
    constructor(public name: string, public numberOfLives: number) {
    }
}

export class Dog {
    constructor(public name: string, public isBarkingOnNeighbors: boolean) {
    }
}

function compose<T, U>(obj1: T, obj2: U): T & U {
    return _.assignIn({}, obj1, obj2);
}

const monster = compose(new Cat('Mitzy', 9), new Dog('Sparky', false));
console.log(monster.name);
console.log(monster.numberOfLives);
console.log(monster.isBarkingOnNeighbors);

interface Destroyable {
    destroy(): void;
}

interface Lengthable {
    readonly length: number;
}

function destroyIfTooLong(obj: Lengthable & Destroyable):void {
    if (obj.length > 1000) {
        obj.destroy();
    }
}
