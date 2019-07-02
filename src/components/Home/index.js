// External Dependencies
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// Internal Dependencies
import Options from './Options';
import Welcome from './Welcome';
import { connectComponent } from '../../utils';
import { csrfToken } from '../../utils/auth';
import { parseHash, removeHash } from '../../utils/auth';
import { getNetlifyUser, setNetlifyApiToken } from '../../state/user/actions';

// Local Variables
const propTypes = {
  hasToken: PropTypes.bool.isRequired,
  isGettingUser: PropTypes.bool.isRequired,
  onGetNetlifyUser: PropTypes.func.isRequired,
  onSetNetlifyApiToken: PropTypes.func.isRequired,
  user: PropTypes.shape({})
};

const defaultProps = {
  user: null
};

// Component Definition
function Home(props) {
  const {
    hasToken,
    isGettingUser,
    onGetNetlifyUser,
    onSetNetlifyApiToken,
    user
  } = props;

  useEffect(() => {
    const response = parseHash(window.location.hash);

    console.log('Home : useEffect : response', response);
    /* Clear hash */
    removeHash();

    /* Protect against csrf (cross site request forgery https://bit.ly/1V1AvZD) */
    if (response.token && !localStorage.getItem(response.csrf)) {
      alert('Token invalid. Please try to login again');
      return;
    } else if (response.token && !hasToken) {
      // We deocde and store the netlify token sent via OAuth
      onSetNetlifyApiToken(window.atob(response.token));
    }

    // No token, bail out
    if (!hasToken) {
      return;
      // Yes token, let's initialize user data
    } else if (hasToken) {
      onGetNetlifyUser();
    }

    /* Clean up csrfToken */
    localStorage.removeItem(response.csrf);
  }, [hasToken, onGetNetlifyUser, onSetNetlifyApiToken]);

  function handleAuth(e) {
    e.preventDefault();

    const tokenFromEnvironment = process.env.REACT_APP_NETLIFY_KEY;

    if (tokenFromEnvironment) {
      console.log('token from .env');
      return onSetNetlifyApiToken(tokenFromEnvironment);
    }

    console.log('connecting to API via OAuth');

    const state = csrfToken();
    const { location, localStorage } = window;

    /* Set csrf token */
    localStorage.setItem(state, 'true');

    /* Do redirect */
    const redirectTo = `${location.origin}${location.pathname}`;
    window.location.href = `/.netlify/functions/auth-start?url=${redirectTo}&csrf=${state}`;
  }

  return !user ? (
    <Welcome onClickLoginButton={handleAuth} />
  ) : isGettingUser ? (
    <CircularProgress size={50} thickness={5} />
  ) : (
    <Options user={user} />
  );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connectComponent(
  state => {
    const { apiData, apiToken, isGetting: isGettingUser } = state.user;

    return {
      hasToken: !!apiToken,
      isGettingUser,
      user: apiData
    };
  },
  {
    onGetNetlifyUser: getNetlifyUser,
    onSetNetlifyApiToken: setNetlifyApiToken
  },
  Home
);
