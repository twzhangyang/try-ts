import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import { middlewares } from "./../src/createStore";


export const findByTestAttr = (component, attr) => {
  console.log(component.debug());

  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}