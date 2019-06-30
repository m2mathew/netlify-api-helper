// Internal Dependencies
import { netlifyClient } from '../client';
import { accountGetRequest, accountGetSuccess } from './action-creators';

// Begin Actions
export const getNetlifyAccount = id => async dispatch => {
  dispatch(accountGetRequest());
  let account;

  try {
    account = await netlifyClient.getAccount({
      account_id: id
    });
  } catch (err) {
    console.log('getNetlifyAccount : error :', err);
    return { err };
  }

  console.log('getNetlifyAccount : account :', account);
  return dispatch(accountGetSuccess(account));
};
