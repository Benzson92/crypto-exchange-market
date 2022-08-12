import { pairSymbolTickerTypes } from '../actionTypes/pairSymbolTickerTypes';
import {
  PairSymbolTickerActions,
  PairSymbolTickerState,
} from '../../types/PairSymbolTickerType';

const initialState: PairSymbolTickerState = {
  pending: true,
  pairSymbolTicker: null,
  error: null,
};

export default (state = initialState, action: PairSymbolTickerActions) => {
  switch (action.type) {
    case pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_SUCCESS:
      return {
        ...state,
        pending: false,
        pairSymbolTicker: action.payload.pairSymbolTicker,
        error: null,
      };
    case pairSymbolTickerTypes.FETCH_PAIR_SYMBOL_TICKER_FAILURE:
      return {
        ...state,
        pending: false,
        pairSymbolTicker: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
