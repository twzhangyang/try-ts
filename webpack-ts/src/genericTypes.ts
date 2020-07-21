type array = Array<Number>;
type array2 = Array<String>;

const last1 = (array: Array<Number>) => {
  return array[array.length - 1];
}

function last2<T>(array: Array<T>): T {
  return array[array.length - 1];
}

const last = <T>(array: Array<T>): T => {
  return array[array.length - 1];
}


const getLast = last([1, 2, 3]);
const getLast1 = last(["a", "b", "c"]);


const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const arr1 = makeArray(1, 2);
const arr2 = makeArray<string | null, number>("a", 1);

const makeFullName = (person: { firstName, lastName }) => {
  return {
    ...person,
    fullName: person.firstName + person.lastName
  }
}

const makeFullName2 = <T extends {firstName: string, lastName: string}>(person: T) => {
  return {
    ...person,
    fullName: person.firstName + person.lastName
  }
}

const v1 = makeFullName({firstName: "hello", lastName: "world"});
const v2 = makeFullName2({firstName: "hello", lastName: "world", another:"good"});

interface Tab<T> {
  id: string,
  position: number,
  data: T
}

type NumberTab = Tab<Number>;

const makeArray1 = <X extends string & number, Y = number>(x: X, y: Y): [X, Y] => [x, y];
