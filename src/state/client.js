// External Dependencies
import NetlifyAPI from 'netlify';

// Local Variables
export const netlifyClient = () =>
  new NetlifyAPI(process.env.REACT_APP_NETLIFY_KEY);
