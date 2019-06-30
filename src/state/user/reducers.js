// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import createReducer from '../create-reducer';
import {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
  USER_ERROR_CAUGHT
} from '../action-types';

const initialState = {};

// Reducer Definitions
export const apiData = createReducer(initialState, {
  [USER_GET_SUCCESS]: (state, action) => action.res
  // TODO: Add PUT/POST data in this spot
});

export const isGetting = createReducer(false, {
  [USER_GET_REQUEST]: () => true,
  [USER_GET_SUCCESS]: () => false,
  [USER_ERROR_CAUGHT]: () => false
});

export const isPosting = createReducer(false, {
  [USER_POST_REQUEST]: () => true,
  [USER_POST_SUCCESS]: () => false,
  [USER_ERROR_CAUGHT]: () => false
});

export const isPutting = createReducer(false, {
  [USER_PUT_REQUEST]: () => true,
  [USER_PUT_SUCCESS]: () => false,
  [USER_ERROR_CAUGHT]: () => false
});

export default combineReducers({
  apiData,
  isGetting,
  isPosting,
  isPutting
});
