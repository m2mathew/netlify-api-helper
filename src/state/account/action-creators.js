// Internal Dependencies
import {
  ACCCOUNT_GET_REQUEST,
  ACCCOUNT_GET_SUCCESS,
  ACCCOUNT_POST_REQUEST,
  ACCCOUNT_POST_SUCCESS,
  ACCCOUNT_PUT_REQUEST,
  ACCCOUNT_PUT_SUCCESS
} from '../action-types';

export const accountGetRequest = () => ({
  type: ACCCOUNT_GET_REQUEST
});

export const accountGetSuccess = res => ({
  type: ACCCOUNT_GET_SUCCESS,
  res
});

export const accountPostRequest = () => ({
  type: ACCCOUNT_POST_REQUEST
});

export const accountPostSuccess = res => ({
  type: ACCCOUNT_POST_SUCCESS,
  res
});

export const accountPutRequest = () => ({
  type: ACCCOUNT_PUT_REQUEST
});

export const accountPutSuccess = res => ({
  type: ACCCOUNT_PUT_SUCCESS,
  res
});
