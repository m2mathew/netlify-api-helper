// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import createReducer from '../create-reducer';
import {
  SITES_GET_REQUEST,
  SITES_GET_SUCCESS,
  SITES_POST_REQUEST,
  SITES_POST_SUCCESS,
  SITES_PUT_REQUEST,
  SITES_PUT_SUCCESS,
  SITES_ERROR_CAUGHT
} from '../action-types';

// Reducer Definitions
const initialApiDataState = null;
export const apiData = createReducer(initialApiDataState, {
  [SITES_GET_SUCCESS]: (state, action) => {
    return {
      Items: action.res
    };
  }
  // TODO: Add PUT/POST data in this spot
});

export const isGetting = createReducer(false, {
  [SITES_GET_REQUEST]: () => true,
  [SITES_GET_SUCCESS]: () => false,
  [SITES_ERROR_CAUGHT]: () => false
});

export const isPosting = createReducer(false, {
  [SITES_POST_REQUEST]: () => true,
  [SITES_POST_SUCCESS]: () => false,
  [SITES_ERROR_CAUGHT]: () => false
});

export const isPutting = createReducer(false, {
  [SITES_PUT_REQUEST]: () => true,
  [SITES_PUT_SUCCESS]: () => false,
  [SITES_ERROR_CAUGHT]: () => false
});

export default combineReducers({
  apiData,
  isGetting,
  isPosting,
  isPutting
});
