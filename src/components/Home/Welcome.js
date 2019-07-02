// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';

// Local Variables
const propTypes = {
  onClickLoginButton: PropTypes.func.isRequired
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
function Welcome(props) {
  const { onClickLoginButton } = props;

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
      <StartButton onClick={onClickLoginButton}>
        Log in with Netlify
      </StartButton>
    </Wrapper>
  );
}

Welcome.propTypes = propTypes;

export default Welcome;
