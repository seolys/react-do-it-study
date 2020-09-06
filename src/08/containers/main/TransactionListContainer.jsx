import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
// import { setTransactionList } from '../../actions/transactionActions';
// import { requestTransactionList } from '../../actions/transactionActions';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import {
  transactionListSelector,
  // loadingStateSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  // const { ids, entities, loadingState } = state.transactions;
  // const transactions = ids.map((id) => entities[id]);

  // const loading = loadingState[FETCH_TRANSACTION_LIST];

  // return { transactions, loading };
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state),
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
