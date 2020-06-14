import { BUG_ADDED, BUG_REMOVE } from "./actionTypes";

console.log(BUG_REMOVE);
console.log(BUG_ADDED);

export const bugAdded = (description) => {

  return {
    type: BUG_ADDED,
    payload: {
      description: "Bug1"
    }
  };

};

export const bugRemoved = (id) => {
  return {
    type: BUG_REMOVE,
    payload: {
      id : 1
    }
  }
}