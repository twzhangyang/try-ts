import { createStore } from 'redux';
import rootReducer from './../reducer/index';

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT"});

