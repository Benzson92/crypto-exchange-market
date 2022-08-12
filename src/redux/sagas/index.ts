import { all, fork } from 'redux-saga/effects';
import pairSymbolTickerSaga from './pairSymbolTickerSaga';

export default function* rootSaga() {
  yield all([fork(pairSymbolTickerSaga)]);
}
