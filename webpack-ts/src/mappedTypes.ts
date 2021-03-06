export interface Cat {
  age: number;
  name: string;
}

type ReadonlyCat = {
 readonly [ P in keyof Cat]: Cat[P];
}

type GenericReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

type ReadonlyCat2 = GenericReadonly<Cat>;

type GenericPartial<T> = {
  [P in keyof T]: T[P];
}

type PartialCat = GenericPartial<Cat>;
type ReadonlyPartialCat = GenericReadonly<PartialCat>;

type GenericNullable<T> = {
  [ P in keyof T]: T[P] | null;
}

type NullableCat = GenericNullable<Cat>;

interface Proxy<T> {
  get(): T;
  set(value: T): void;
}

type Proxied<T> = {
  [P in keyof T]: Proxy<T>;
}
type ProxiedCat = Proxied<Cat>;
const cat: Proxied<Cat> = null;
cat.age.get();

type A = ReadOnly<Cat>;
type B = Partial<Cat>;
type C = Pick<Cat, 'age' | 'name'>
