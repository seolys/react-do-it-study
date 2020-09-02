import React, { PureComponent } from 'react';
import CoinOverView from './CoinOverView';
import TransactionList from './TransactionList';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverView />
        <TransactionList />
      </React.Fragment>
    );
  }
}

export default MainPage;
