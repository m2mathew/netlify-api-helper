// External Dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';

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

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// Component Definition
function Home() {
  return (
    <Wrapper>
      <SectionTitle>Welcome, Friend!</SectionTitle>
      <p>
        This simple tool provides some of the basic functionality of Netlify's
        main app.
      </p>
      <p>
        To get started on this quest, click the button below to set up this app.
      </p>
      <ButtonLink to="/setup/">
        <StartButton>Setup</StartButton>
      </ButtonLink>
    </Wrapper>
  );
}

export default Home;