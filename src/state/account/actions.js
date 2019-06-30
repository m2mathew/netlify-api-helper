// Internal Dependencies
import { netlifyClient } from '../client';
import {
  accountGetRequest,
  accountGetSuccess,
  caughtError
} from './action-creators';

// Begin Actions
export const getNetlifyAccount = id => dispatch => {
  dispatch(accountGetRequest());
  return netlifyClient
    .getAccount({
      account_id: id
    })
    .then(res => {
      console.log('getNetlifyAccount : res :', res);
      dispatch(accountGetSuccess(res));
    })
    .catch(err => {
      console.log('getNetlifyAccount : err :', err);
      dispatch(caughtError(err));
      return err;
    });
};
