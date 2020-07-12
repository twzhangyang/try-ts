export interface Cat {
  kind: 'cat';
  numberOfLives: number;
}

export interface Dog {
  kind: 'dog';
  isBarkingOnStrangers: boolean;
}

export interface Cow {
  kind: 'cow';
  drinks: string;
}

type Animal = Cat | Dog | Cow;

function assertNever(o: never): never {
  throw new Error('Was called with an object ' + o);
}

function tellAFact(animal: Animal): string {
  switch(animal.kind) {
    case 'cat':
      return `The cat has ${animal.numberOfLives} lives left`;
    case 'dog':
      return `The dog does ${animal.isBarkingOnStrangers}`;
    case 'cow':
      return 'The cow drinks' + animal.drinks;
    default:
      return assertNever(animal);
  }
}

console.log(tellAFact({kind: 'cat', numberOfLives: 9}));

