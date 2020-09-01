import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverView';

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <CoinOverview />
      </AppLayout>
    );
  }
}

export default CoinApp;