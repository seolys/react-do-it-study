// import transactions from './transactionsReducer';
import notification from './notificationReducers';
import searchFilter from './searchFilterReducer';
import router from './routerReducer';
import createReducers from '../../11/api-redux-pack/createReducers';

const apiReducers = createReducers('transactions', 'users');

export default {
  // transactions,
  ...apiReducers,
  notification,
  searchFilter,
  router,
};
