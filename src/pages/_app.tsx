import React from 'react';
import { Provider } from 'react-redux';

import '../assets/globals.css';
import type { AppProps } from 'next/app';
import store from '../redux/store';

function CryptoExchangeMarketApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default CryptoExchangeMarketApp;
