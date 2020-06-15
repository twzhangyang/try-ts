import * as ActionTypes from "./../actions/index";
import { combineReducers } from "redux";

const initalState = {
  number: 0,
};

const numbers = (state = initalState, action) => {

  switch (action.type) {
    case ActionTypes.INCREMENTPOSTS:
      return {
        ...state,
        number: state.number + 1
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        number: state.number = 1
      };
    default:
      return {...state};
  }
};

const rootReducer = combineReducers({
  numbers,
});

export default rootReducer;
