export interface Cat {
  name: string;
  age: number;
  feed(food: string): string;
}

// keyof
type CatKey = keyof Cat;

// T[K]
type ageType = Cat['age'];
type feedType = Cat['feed'];

function getPropertyValue<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName];
}

const cat: Cat = null;
const catAge = getPropertyValue(cat, 'age');
const catName = getPropertyValue(cat, 'name');

function getProperties<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(name => obj[name]);
}

const getProperties1 = <T, K extends keyof T>(obj: T, names: K[]): T[K][] => names.map(name => obj[name]);

const catAgeAndName = getProperties(cat, ['feed', 'name']);

