// Internal Dependencies
import {
  ACCCOUNTS_ERROR_CAUGHT,
  ACCCOUNTS_GET_REQUEST,
  ACCCOUNTS_GET_SUCCESS,
  ACCCOUNTS_POST_REQUEST,
  ACCCOUNTS_POST_SUCCESS,
  ACCCOUNTS_PUT_REQUEST,
  ACCCOUNTS_PUT_SUCCESS
} from '../action-types';

// Begin Action Creators
export const accountsCaughtError = err => ({
  type: ACCCOUNTS_ERROR_CAUGHT,
  err
});

export const accountsGetRequest = () => ({
  type: ACCCOUNTS_GET_REQUEST
});

export const accountsGetSuccess = res => ({
  type: ACCCOUNTS_GET_SUCCESS,
  res
});

export const accountsPostRequest = () => ({
  type: ACCCOUNTS_POST_REQUEST
});

export const accountsPostSuccess = res => ({
  type: ACCCOUNTS_POST_SUCCESS,
  res
});

export const accountsPutRequest = () => ({
  type: ACCCOUNTS_PUT_REQUEST
});

export const accountsPutSuccess = res => ({
  type: ACCCOUNTS_PUT_SUCCESS,
  res
});
