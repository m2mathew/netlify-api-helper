// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';
import { csrfToken } from '../../utils/auth';

// Local Variables
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
function Home() {
  function handleAuth(e) {
    e.preventDefault();
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
      <p>
        We will authenticate your netlify account with this application. Then
        you can look around at your Netlify sites and user information.
      </p>
      <p>To get started on this quest, click the button below!</p>
      <StartButton onClick={handleAuth}>Log in with Netlify</StartButton>
    </Wrapper>
  );
}

export default Home;
