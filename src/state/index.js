// External Dependencies
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Internal Dependencies
import accounts from './accounts/reducers';
import sites from './sites/reducers';
import user from './user/reducers';

const reducers = {
  accounts,
  sites,
  user
};

// Squash all reducers into one
export const reducer = combineReducers(reducers);

// Make the store
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  )
);

export default store;
