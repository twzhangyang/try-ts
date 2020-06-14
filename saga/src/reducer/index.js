import * as ActionTypes from './../actions/index';
import { combineReducers } from 'redux';

const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state -1 ;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
 numberReducer 
});


export default rootReducer;
