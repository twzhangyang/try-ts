import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducer/index';
import * as ActionTypes from './../actions/index';
import createSagaMiddleware from 'redux-saga';
import { watchIncrement } from './../saga/index';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIncrement);


store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ActionTypes.INCREMENT});

export default store; 