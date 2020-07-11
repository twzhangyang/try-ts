export class Cat {
   constructor(public name: string, public numberOfLives: number) {
   }
}

export class Dog {
   constructor(public name: string, public isBarkingOnNeighbors: boolean) {
   }
}

export class Person {
   constructor(public name: string, age: number) {
   }
}

function rename(thing: Cat | Dog | Person, newName: string): void {
   thing.name = newName;
}

rename(new Cat('Fluffy', 9), 'Mitzy');
rename(new Dog('Spark', true), 'Speedy');
rename(new Person('Ben', 18), 'John');

function printDate(date: string | number | Date): void {
   console.log(date);
}

printDate(new Date());
printDate('12/05/2017');
// printDate({});
