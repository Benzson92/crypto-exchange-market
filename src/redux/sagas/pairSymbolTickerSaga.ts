import { all, call, put, takeLatest, delay } from 'redux-saga/effects';

import {
  fetchPairSymbolTickerFailure,
  fetchPairSymbolTickerSuccess,
} from '../actions/pairSymbolTickerActions';
import { pairSymbolTickerTypes } from '../actionTypes/pairSymbolTickerTypes';
import { getPairSymbolTicker } from '../../services/api/pairSymbolTickers/ApiGetPairSymbolTicker';
import { FetchPairSymbolTickerRequest } from '../../types/PairSymbolTickerType';

function* fetchPairSymbolTickerSaga(action: FetchPairSymbolTickerRequest) {
  try {
    const response = yield call(getPairSymbolTicker, action.payload);

    yield put(
      fetchPairSymbolTickerSuccess({
        pairSymbolTicker: response.data,
      })
    );

    yield delay(5000);
    yield put(action);
  } catch (error) {
    yield put(
      fetchPairSymbolTickerFailure({
        error: error.message,
      })
    );
  }
}

function* pairSymbolTickerSaga() {
  yield all([
    takeLatest(
      pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_REQUEST,
      fetchPairSymbolTickerSaga
    ),
  ]);
}

export default pairSymbolTickerSaga;
