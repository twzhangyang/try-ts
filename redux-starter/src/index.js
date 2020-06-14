import store from "./store";
import { bugAdded, bugRemoved } from "./action";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

console.log(bugAdded("Bug1"))
store.dispatch(bugAdded("Bug1"));

unsubscribe();

console.log(bugRemoved(1));
store.dispatch(bugRemoved(1));

console.log(store);
console.log(store.getState());
