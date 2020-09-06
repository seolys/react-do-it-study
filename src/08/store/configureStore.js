import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import reducers from '../reducers';

import notificationEffects from '../middlewares/notificationEffects';
import transactionEffects from '../middlewares/transactionEffects';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        reduxPackMiddleware,
        notificationEffects,
        transactionEffects,
        searchFilterEffects,
        routerEffects,
      ),
    ),
  );
