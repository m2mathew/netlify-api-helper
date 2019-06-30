// Internal Dependencies
import {
  SET_NETLIFY_API_TOKEN,
  USER_ERROR_CAUGHT,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS
} from '../action-types';

// Begin Action Creators
export const netlifyApiTokenSet = token => ({
  type: SET_NETLIFY_API_TOKEN,
  token
});

export const userCaughtError = err => ({
  type: USER_ERROR_CAUGHT,
  err
});

export const userGetRequest = () => ({
  type: USER_GET_REQUEST
});

export const userGetSuccess = res => ({
  type: USER_GET_SUCCESS,
  res
});

export const userPostRequest = () => ({
  type: USER_POST_REQUEST
});

export const userPostSuccess = res => ({
  type: USER_POST_SUCCESS,
  res
});

export const userPutRequest = () => ({
  type: USER_PUT_REQUEST
});

export const userPutSuccess = res => ({
  type: USER_PUT_SUCCESS,
  res
});
