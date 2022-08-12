import { PairSymbolTickerDTO } from '../models/ticker/PairSymbolTickerDTO';
import { pairSymbolTickerTypes } from '../redux/actionTypes/pairSymbolTickerTypes';
import { ApiGetPairSymbolTickerParams } from '../services/api/pairSymbolTickers/ApiGetPairSymbolTicker';

export interface PairSymbolTickerState {
  pending: boolean;
  pairSymbolTicker: PairSymbolTickerDTO;
  error: string | null;
}

export interface FetchPairSymbolTickerSuccessPayload {
  pairSymbolTicker: PairSymbolTickerDTO;
}

export interface FetchPairSymbolTickerFailurePayload {
  error: string;
}

export interface FetchPairSymbolTickerRequest {
  type: typeof pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_REQUEST;
  payload: ApiGetPairSymbolTickerParams;
}

export type FetchPairSymbolTickerSuccess = {
  type: typeof pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_SUCCESS;
  payload: FetchPairSymbolTickerSuccessPayload;
};

export type FetchPairSymbolTickerFailure = {
  type: typeof pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_FAILURE;
  payload: FetchPairSymbolTickerFailurePayload;
};

export type PairSymbolTickerActions =
  | FetchPairSymbolTickerRequest
  | FetchPairSymbolTickerSuccess
  | FetchPairSymbolTickerFailure;
