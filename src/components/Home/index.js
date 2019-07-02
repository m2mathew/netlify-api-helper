// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';
import { connectComponent } from '../../utils';
import { csrfToken } from '../../utils/auth';
import { parseHash, removeHash } from '../../utils/auth';
import { getNetlifyUser, setNetlifyApiToken } from '../../state/user/actions';
import { CircularProgress } from '@material-ui/core';

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

const StartButton = styled.button`
  background: linear-gradient(160deg, rebeccapurple 30%, #280154 90%);
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin-top: 2em;
  padding: 12px 32px;

  ::before {
    content: '🚀 ';
  }

  &:hover {
    color: #eee;
  }
`;

// Component Definition
function Home(props) {
  const {
    hasToken,
    isGettingUser,
    onGetNetlifyUser,
    onSetNetlifyApiToken,
    user
  } = props;

  console.log('Home : user :', user);

  useEffect(() => {
    const response = parseHash(window.location.hash);

    console.log('Home : useEffect : response', response);
    /* Clear hash */
    removeHash();

    /* Protect against csrf (cross site request forgery https://bit.ly/1V1AvZD) */
    if (response.token && !localStorage.getItem(response.csrf)) {
      alert('Token invalid. Please try to login again');
      return;
    } else {
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

  return (
    <Wrapper>
      <SectionTitle>Welcome, Friend!</SectionTitle>
      <p>
        This simple tool provides some of the basic functionality of Netlify's
        main app.
      </p>
      {!user ? (
        <>
          <p>
            We will authenticate your netlify account with this application.
            Then you can look around at your Netlify sites and user information.
          </p>
          <p>To get started on this quest, click the button below!</p>
          <StartButton onClick={handleAuth}>Log in with Netlify</StartButton>
        </>
      ) : (
        <>
          <h4>User Data</h4>
          {isGettingUser ? (
            <CircularProgress />
          ) : (
            <>
              <p>{user.full_name}</p>
              <p>{user.email}</p>
            </>
          )}
        </>
      )}
    </Wrapper>
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
