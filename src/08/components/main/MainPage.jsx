import React, { PureComponent } from 'react';
import CoinOverView from './CoinOverView';
// import TransactionList from './TransactionList';
import TransactionListContainer from '../../containers/main/TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverView />
        <TransactionListContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
