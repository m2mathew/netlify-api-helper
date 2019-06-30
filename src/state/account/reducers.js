// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import createReducer from '../create-reducer';
import {
  ACCCOUNT_GET_REQUEST,
  ACCCOUNT_GET_SUCCESS,
  ACCCOUNT_POST_REQUEST,
  ACCCOUNT_POST_SUCCESS,
  ACCCOUNT_PUT_REQUEST,
  ACCCOUNT_PUT_SUCCESS
} from '../action-types';

const initialState = {};

// Reducer Definitions
export const apiData = createReducer(initialState, {
  [ACCCOUNT_GET_SUCCESS]: (state, action) => action.res
  // TODO: Add PUT/POST data in this spot
});

export const isGetting = createReducer(null, {
  [ACCCOUNT_GET_REQUEST]: (state, action) => action.id,
  [ACCCOUNT_GET_SUCCESS]: () => null
});

export const isPosting = createReducer(null, {
  [ACCCOUNT_POST_REQUEST]: (state, action) => action.id,
  [ACCCOUNT_POST_SUCCESS]: () => null
});

export const isPutting = createReducer(null, {
  [ACCCOUNT_PUT_REQUEST]: (state, action) => action.id,
  [ACCCOUNT_PUT_SUCCESS]: () => null
});

export default combineReducers({
  apiData,
  isGetting,
  isPosting,
  isPutting
});
