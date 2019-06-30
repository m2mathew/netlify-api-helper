// External Dependencies
import { createStore, combineReducers } from 'redux';

// Internal Dependencies
import account from './account/reducers';

const reducers = {
  account
};

// Squash all reducers into one
export const reducer = combineReducers(reducers);

console.log('is production?', process.env.NODE_ENV === 'production');

// Make the store
const store = createStore(
  reducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
