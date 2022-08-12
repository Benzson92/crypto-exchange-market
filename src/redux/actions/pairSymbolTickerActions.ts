import { pairSymbolTickerTypes } from '../actionTypes/pairSymbolTickerTypes';
import {
  FetchPairSymbolTickerFailure,
  FetchPairSymbolTickerFailurePayload,
  FetchPairSymbolTickerRequest,
  FetchPairSymbolTickerSuccess,
  FetchPairSymbolTickerSuccessPayload,
} from '../../types/PairSymbolTickerType';
import { ApiGetPairSymbolTickerParams } from '../../services/api/pairSymbolTickers/ApiGetPairSymbolTicker';

export const fetchPairSymbolTickerRequest = (
  payload: ApiGetPairSymbolTickerParams
): FetchPairSymbolTickerRequest => ({
  type: pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_REQUEST,
  payload,
});

export const fetchPairSymbolTickerSuccess = (
  payload: FetchPairSymbolTickerSuccessPayload
): FetchPairSymbolTickerSuccess => ({
  type: pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_SUCCESS,
  payload,
});

export const fetchPairSymbolTickerFailure = (
  payload: FetchPairSymbolTickerFailurePayload
): FetchPairSymbolTickerFailure => ({
  type: pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_FAILURE,
  payload,
});
