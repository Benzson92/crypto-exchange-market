import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import MarketIdViewPage from '@/components/marketId';

type Props = {
  marketId: string;
};

const MarketIdPage: React.FunctionComponent<Props> = (props) => {
  const { marketId } = props;
  const shownSymbol = marketId?.split('_').join('/');

  return (
    <>
      <Head>
        <title>{`${shownSymbol} | Satang Pro`}</title>
      </Head>
      <MarketIdViewPage {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const marketId = context.params.marketId as string;

  return {
    props: {
      marketId,
    }, // will be passed to the page component as props
  };
};

export default MarketIdPage;
