type Age = number;
type AgeProvider = () => Age;
type AgeSource = Age | AgeProvider;

function toAge(ageSource: AgeSource): Age {
  if (typeof ageSource === 'number') {
    return ageSource;
  }

  return ageSource();
}

export type Node<T> = { data: T; next: Node<T> };
export type DataMode<T> = T & { next: DataMode<T> };

interface Cat {
  age: Age;
}

// const node1: Node<Cat> = null;
// console.log(node1.data.age);
// console.log(node1.next.data.age);

