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

export const isGetting = createReducer(false, {
  [ACCCOUNT_GET_REQUEST]: () => true,
  [ACCCOUNT_GET_SUCCESS]: () => false
});

export const isPosting = createReducer(false, {
  [ACCCOUNT_POST_REQUEST]: () => true,
  [ACCCOUNT_POST_SUCCESS]: () => false
});

export const isPutting = createReducer(false, {
  [ACCCOUNT_PUT_REQUEST]: () => true,
  [ACCCOUNT_PUT_SUCCESS]: () => false
});

export default combineReducers({
  apiData,
  isGetting,
  isPosting,
  isPutting
});
