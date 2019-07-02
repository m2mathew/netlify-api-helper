// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import createReducer from '../create-reducer';
import {
  SET_NETLIFY_API_TOKEN,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
  USER_ERROR_CAUGHT
} from '../action-types';

// Reducer Definitions
const initialApiDataState = null;
export const apiData = createReducer(initialApiDataState, {
  [USER_GET_SUCCESS]: (state, action) => action.res
  // TODO: Add PUT/POST data in this spot
});

const initialApiTokenState = '';
export const apiToken = createReducer(initialApiTokenState, {
  [SET_NETLIFY_API_TOKEN]: (state, action) => action.token
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
  apiToken,
  isGetting,
  isPosting,
  isPutting
});
