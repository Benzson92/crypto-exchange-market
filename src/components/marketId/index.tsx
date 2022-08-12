import { Col, Row, Button, Card, Skeleton, Empty } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPairSymbolTickerRequest } from '../../redux/actions/pairSymbolTickerActions';
import { RootState } from '../../redux/reducers';

import MarketIdPairSymbolButtonList from './components/MarketIdPairSymbolButtonList';
import MarketIdPairSymbolCard from './components/MarketIdPairSymbolCard';

import styles from './index.module.scss';

type Props = {
  marketId: string;
};

const pairSymbolList = ['BTC/THB', 'BUSD/THB', 'USDT/THB'];

const MarketIdViewPage: React.FunctionComponent<Props> = (props) => {
  const marketId = props.marketId?.toLowerCase();

  const dispatch = useDispatch();
  const { pending, pairSymbolTicker, error } = useSelector(
    (state: RootState) => state.pairSymbolTickerReducer
  );

  useEffect(() => {
    if (marketId) {
      dispatch(fetchPairSymbolTickerRequest({ symbol: marketId }));
    }
  }, [dispatch, marketId]);

  const onPairSymbolButtonClick = (pairSymbol: string) => {
    const symbol = pairSymbol.split('/').join('_');
    dispatch(fetchPairSymbolTickerRequest({ symbol }));
  };

  if (error) {
    return (
      <div className={styles.MarketIdViewPage}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles.MarketIdViewPage}>
      <Row align="middle" gutter={24}>
        <Col span={12}>
          <MarketIdPairSymbolButtonList
            data={pairSymbolList}
            keyExtractor={(item, index) => item + index}
            renderItem={(item) => (
              <Button
                ghost
                type="primary"
                shape="round"
                disabled={pending}
                loading={pending}
                className={styles.PairSymbolButton}
                onClick={() => onPairSymbolButtonClick(item)}
              >
                {item}
              </Button>
            )}
            className={styles.PairSymbolList}
            containerClassName={styles.PairSymbolButtonContainer}
          />
        </Col>
        <Col span={12}>
          {pending ? (
            <Card className={styles.PairSymbolSkeletonCard}>
              <Skeleton active round title={false} paragraph={{ rows: 3 }} />
            </Card>
          ) : (
            <MarketIdPairSymbolCard pairSymbolTicker={pairSymbolTicker} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MarketIdViewPage;
