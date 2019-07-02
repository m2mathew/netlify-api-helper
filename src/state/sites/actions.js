// Internal Dependencies
import { netlifyClient } from '../client';
import {
  sitesGetRequest,
  sitesGetSuccess,
  sitesCaughtError
} from './action-creators';

// Begin Actions
export const getSitesList = () => (dispatch, getState) => {
  dispatch(sitesGetRequest());
  return netlifyClient(getState().user.apiToken)
    .listSites()
    .then(res => dispatch(sitesGetSuccess(res)))
    .catch(err => {
      dispatch(sitesCaughtError(err));
      return err;
    });
};
