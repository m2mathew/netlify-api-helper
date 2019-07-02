// Internal Dependencies
import { netlifyClient } from '../client';
import {
  netlifyApiTokenSet,
  userGetRequest,
  userGetSuccess,
  userCaughtError
} from './action-creators';

// Begin Actions
export const setNetlifyApiToken = token => dispatch =>
  dispatch(netlifyApiTokenSet(token));

export const getNetlifyUser = () => (dispatch, getState) => {
  dispatch(userGetRequest());
  return netlifyClient(getState().user.apiToken)
    .getCurrentUser()
    .then(res => dispatch(userGetSuccess(res)))
    .catch(err => {
      dispatch(userCaughtError(err));
      return err;
    });
};
