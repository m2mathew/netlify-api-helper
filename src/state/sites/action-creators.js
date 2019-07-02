// Internal Dependencies
import {
  SITES_ERROR_CAUGHT,
  SITES_GET_REQUEST,
  SITES_GET_SUCCESS,
  SITES_POST_REQUEST,
  SITES_POST_SUCCESS,
  SITES_PUT_REQUEST,
  SITES_PUT_SUCCESS
} from '../action-types';

// Begin Action Creators
export const sitesCaughtError = err => ({
  type: SITES_ERROR_CAUGHT,
  err
});

export const sitesGetRequest = () => ({
  type: SITES_GET_REQUEST
});

export const sitesGetSuccess = res => ({
  type: SITES_GET_SUCCESS,
  res
});

export const sitesPostRequest = () => ({
  type: SITES_POST_REQUEST
});

export const sitesPostSuccess = res => ({
  type: SITES_POST_SUCCESS,
  res
});

export const sitesPutRequest = () => ({
  type: SITES_PUT_REQUEST
});

export const sitesPutSuccess = res => ({
  type: SITES_PUT_SUCCESS,
  res
});
