// Internal Dependencies
import { netlifyClient } from '../client';
import {
  accountsGetRequest,
  accountsGetSuccess,
  accountsCaughtError
} from './action-creators';

// Begin Actions
export const getNetlifyAccounts = () => (dispatch, getState) => {
  dispatch(accountsGetRequest());
  return (
    netlifyClient(getState().user.apiToken)
      // TODO: update to correct method
      .listAccountsForUser()
      .then(res => dispatch(accountsGetSuccess(res)))
      .catch(err => {
        dispatch(accountsCaughtError(err));
        return err;
      })
  );
};
