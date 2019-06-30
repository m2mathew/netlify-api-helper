// Internal Dependencies
import { netlifyClient } from '../client';
import {
  accountsGetRequest,
  accountsGetSuccess,
  accountsCaughtError
} from './action-creators';

// Begin Actions
export const getNetlifyAccount = () => dispatch => {
  dispatch(accountsGetRequest());
  return (
    netlifyClient
      // TODO: update to correct method
      .getCurrentUser()
      .then(res => {
        console.log('getNetlifyAccount : res :', res);
        dispatch(accountsGetSuccess(res));
      })
      .catch(err => {
        console.log('getNetlifyAccount : err :', err);
        dispatch(accountsCaughtError(err));
        return err;
      })
  );
};
