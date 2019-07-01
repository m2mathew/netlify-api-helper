// External Dependencies
import axios from 'axios';

/*
 *  For reference:
 *  https://www.netlify.com/docs/api/#authenticating
 *
 *  Uses OAuth2 because we are:
 *    "making a public integration with Netlify for others to enjoy"
 *
 */

export const authenticateWithNetlify = () => {
  // const authHeader = `${process.env.REACT_APP_NETLIFY_CLIENT_ID}:${process.env.REACT_APP_NETLIFY_CLIENT_SECRET}`;
  // const encodedAuthHeader = window.btoa(authHeader);

  // console.log('encodedAuthHeader', encodedAuthHeader);

  return axios({
    url: 'https://app.netlify.com/authorize',
    method: 'get'
    // headers: {
    //   'Authorization': `Bearer ${encodedAuthHeader}`,
    // },
    // auth: {
    //   username: process.env.REACT_APP_NETLIFY_CLIENT_ID,
    //   password: process.env.REACT_APP_NETLIFY_CLIENT_SECRET,
    // },
    // data: {
    //   'grant_type': 'client_credentials'
    // },
  })
    .then(res => console.log('authenticateWithNetlify : res :', res))
    .catch(err => console.log('authenticateWithNetlify : err :', err));
};
