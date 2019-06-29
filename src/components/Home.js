// External Dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Internal Dependencies
import Wrapper from './Wrapper';

// Local Variables
const HomeTitle = styled.h2`
  font-family: 'Rubik Mono One';
`;

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
    color: #ffd9e2;
  }
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// Component Definition
function Home() {
  return (
    <Wrapper>
      <HomeTitle>Welcome, Friend!</HomeTitle>
      <p>
        This simple tool provides some of the basic functionality of Netlify's
        main app.
      </p>
      <p>To get started on this quest, click the button below!</p>
      <StartButton>
        <ButtonLink to="/about/">START</ButtonLink>
      </StartButton>
    </Wrapper>
  );
}

export default Home;
