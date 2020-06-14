import * as ActionTypes from './../actions/index';
import { takeEvery, put, delay, takeLatest } from 'redux-saga/effects';

function* fetchPosts() {
  yield delay(4000);
  yield put({ type: ActionTypes.INCREMENTPOSTS});
}

export function* watchIncrement() {
  yield takeLatest(ActionTypes.INCREMENT, fetchPosts);
}