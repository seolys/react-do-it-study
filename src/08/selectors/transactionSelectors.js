// import { createSelector } from 'reselect';
// import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';

// export const transactionSelector = (state) => state.transactions;

// // export const transactionListSelector = (state) => {
// //   const { ids, entities } = transactionSelector(state);
// //   return ids.map((id) => entities[id]);
// // };

// export const transactionListSelector = createSelector([transactionSelector], (transactions) => {
//   const { ids, entities } = transactions;
//   return ids.map((id) => entities[id]);
// });

// export const loadingStateSelector = (state) => transactionSelector(state).loadingState;

// export const transactionListLoadingStateSelector = (state) =>
//   loadingStateSelector(state)[FETCH_TRANSACTION_LIST];

// export const transactionCreateLoadingStateSelector = (state) =>
//   loadingStateSelector(state)[CREATE_TRANSACTION];

//-------------------------------------------------------

import createSelectors from '../../11/api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');
