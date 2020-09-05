import Api from '../Api';

export const LOADING_TRANSACTION_LIST = 'transactions/LOADING_TRANSACTION_LIST';
export const SET_TRANSACTION_LIST = 'transactions/SET_TRANSACTION_LIST';
export const SET_ERROR = 'transactions/SET_ERROR';

export function loading() {
  return {
    type: LOADING_TRANSACTION_LIST,
  };
}

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}

export function requestTransactionList(params) {
  return (dispatch) => {
    dispatch(loading());
    Api.get('/transactions', { params }).then(
      ({ data }) => dispatch(setTransactionList(data)),
      (error) => dispatch(setError(error.response.data.errorMessage)),
    );
  };
}

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
}
