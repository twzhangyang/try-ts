import * as ActionTypes from './../actions/index';
import { combineReducers } from 'redux';

const initalState = {
  number:0
};

const numberReducer = (state = initalState, action) => {
  const newState = {...state};

  switch (action.type) {
    case ActionTypes.INCREMENTPOSTS:
      return newState.number + 1;
    case ActionTypes.DECREMENT:
      return newState.number -1 ;
    default:
      return newState;
  }
};

const rootReducer = combineReducers({
 numberReducer 
});


export default rootReducer;
