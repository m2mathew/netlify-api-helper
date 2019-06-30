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

export const getNetlifyUser = () => dispatch => {
  dispatch(userGetRequest());
  return (
    netlifyClient
      // TODO: update to correct method
      .getCurrentUser()
      .then(res => {
        console.log('getNetlifyUser: res :', res);
        dispatch(userGetSuccess(res));
      })
      .catch(err => {
        console.log('getNetlifyUser: err :', err);
        dispatch(userCaughtError(err));
        return err;
      })
  );
};
