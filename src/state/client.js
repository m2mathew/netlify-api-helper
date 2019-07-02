/*
 *  For reference:
 *  https://www.netlify.com/docs/api/#authenticating
 *
 *  Uses OAuth2 because we are:
 *    "making a public integration with Netlify for others to enjoy"
 *
 *  YouTube video that explains how to set up OAuth2 with Netlify
 *    - This is 🔥
 *    - https://www.youtube.com/watch?v=LN8cL2yPR3c
 *
 */

// External Dependencies
import NetlifyAPI from 'netlify';

// Local Variables
export const netlifyClient = token => new NetlifyAPI(token);
