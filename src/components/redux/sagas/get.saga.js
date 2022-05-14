import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAll() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/getAll'
    })
    yield put({
      type: 'SET_ALL',
      payload: response.data
    })
  } catch(error) {
    console.log('error getting ALL', error);
  }
}

function* getAllSaga() {
  yield takeLatest('GET_ALL', getAll)
}

export default getAllSaga;