import { handle } from 'redux-pack';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/transactionActions';

const initState = {
  ids: [],
  entities: {},
  loading: false,
  hasError: false,
  pagination: {},
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;

  switch (type) {
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case SET_TRANSACTION_LIST: {
      // console.log(payload);
      const ids = payload.map((entity) => entity['id']);
      // console.log(ids);
      window.ids = ids;
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      // console.log({ ...state, ids, entities });
      return { ...state, ids, entities, loading: false, hasError: false };
    }
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          loading: true,
          hasError: false,
        }),
        success: (prevState) => {
          const { data } = payload;
          const { pageNumber, pageSize } = meta || {};
          const ids = data.map((entity) => entity['id']);
          const entities = data.reduce(
            (finalEntities, entity) => ({ ...finalEntities, [entity['id']]: entity }),
            {},
          );
          return {
            ...prevState,
            ids,
            entities,
            loading: false,
            hasError: false,
            pagination: {
              number: pageNumber,
              size: pageSize,
            },
          };
        },
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loading: false,
            hasError: true,
            errorMessage,
          };
        },
      });
    }
    default:
      return state;
  }
};
