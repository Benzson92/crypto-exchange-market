import { combineReducers } from 'redux';

import pairSymbolTickerReducer from './pairSymbolTickerReducer';

const rootReducer = combineReducers({
  pairSymbolTickerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
