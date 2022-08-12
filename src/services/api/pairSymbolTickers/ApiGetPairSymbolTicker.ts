import { PairSymbolTickerDTO } from '@/models/ticker/PairSymbolTickerDTO';
import axios from 'axios';

export type ApiGetPairSymbolTickerParams = {
  symbol: string;
};

export const getPairSymbolTicker = (params?: ApiGetPairSymbolTickerParams) => {
  const url = `${process.env.NEXT_PUBLIC_SATANG_API_URL}/v3/ticker/24hr`;

  return axios.get<PairSymbolTickerDTO>(url, { params });
};
