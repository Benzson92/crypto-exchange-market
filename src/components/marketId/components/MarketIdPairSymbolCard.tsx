import React from 'react';
import { Card } from 'antd';

import { PairSymbolTickerDTO } from '@/models/ticker/PairSymbolTickerDTO';

import styles from './MarketIdPairSymbolCard.module.scss';

type Props = {
  pairSymbolTicker: PairSymbolTickerDTO;
};

const MarketIdPairSymbolCard: React.FunctionComponent<Props> = ({
  pairSymbolTicker,
}) => {
  const { symbol, lastPrice, volume } = pairSymbolTicker || {};

  const shownSymbol = symbol?.split('_').join('/').toUpperCase() || '-';
  const shownPrice =
    parseFloat(lastPrice).toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 8,
    }) || '-';
  const shownVolume =
    parseFloat(volume).toLocaleString('en-US', { minimumFractionDigits: 2 }) ||
    '-';

  return (
    <Card className={styles.MarketIdPairSymbolCard}>
      <div className={styles.Symbol}>{shownSymbol}</div>
      <div className={styles.LastPrice}>{shownPrice}</div>
      <div className={styles.Volume}>Volume: {shownVolume}</div>
    </Card>
  );
};

export default MarketIdPairSymbolCard;
