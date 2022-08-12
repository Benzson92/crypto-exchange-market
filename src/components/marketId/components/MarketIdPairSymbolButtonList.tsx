import React from 'react';

type Props<ItemT> = {
  data: ReadonlyArray<ItemT>;
  keyExtractor: (item: ItemT, index: number) => string;
  renderItem: (item: ItemT) => React.ReactElement;
  className?: string;
  containerClassName?: string;
};

const MarketIdPairSymbolButtonList = <ItemT,>(props: Props<ItemT>) => {
  return (
    <div className={props.className}>
      {props.data.map((item, index) => (
        <div
          key={props.keyExtractor(item, index)}
          className={props.containerClassName}
        >
          {props.renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default MarketIdPairSymbolButtonList;
