import { createStore } from 'redux';
import rootReducer from './../reducer/index';
import * as ActionTypes from './../actions/index';

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ActionTypes.INCREMENT});

export default store; 