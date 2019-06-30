// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import createReducer from '../create-reducer';
import {
  ACCCOUNTS_GET_REQUEST,
  ACCCOUNTS_GET_SUCCESS,
  ACCCOUNTS_POST_REQUEST,
  ACCCOUNTS_POST_SUCCESS,
  ACCCOUNTS_PUT_REQUEST,
  ACCCOUNTS_PUT_SUCCESS,
  ACCCOUNTS_ERROR_CAUGHT
} from '../action-types';

const initialState = {};

// Reducer Definitions
export const apiData = createReducer(initialState, {
  [ACCCOUNTS_GET_SUCCESS]: (state, action) => action.res
  // TODO: Add PUT/POST data in this spot
});

export const isGetting = createReducer(false, {
  [ACCCOUNTS_GET_REQUEST]: () => true,
  [ACCCOUNTS_GET_SUCCESS]: () => false,
  [ACCCOUNTS_ERROR_CAUGHT]: () => false
});

export const isPosting = createReducer(false, {
  [ACCCOUNTS_POST_REQUEST]: () => true,
  [ACCCOUNTS_POST_SUCCESS]: () => false,
  [ACCCOUNTS_ERROR_CAUGHT]: () => false
});

export const isPutting = createReducer(false, {
  [ACCCOUNTS_PUT_REQUEST]: () => true,
  [ACCCOUNTS_PUT_SUCCESS]: () => false,
  [ACCCOUNTS_ERROR_CAUGHT]: () => false
});

export default combineReducers({
  apiData,
  isGetting,
  isPosting,
  isPutting
});
