import { all } from 'redux-saga/effects';
import getAllSaga from './get.saga';

export default function* rootSaga() {
  yield all([
    getAllSaga()
  ]);
}