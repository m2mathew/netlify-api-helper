// External Dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Internal Dependencies
import SectionTitle from './SectionTitle';
import Wrapper from './Wrapper';

// Local Variables
const BodyLink = styled(Link)`
  color: hotpink;
  font-weight: 600;
`;

const Code = styled.code`
  font-weight: 600;
`;

// Component Definition
function FourOhFour({ location }) {
  return (
    <Wrapper>
      <SectionTitle>Oops!</SectionTitle>
      <p>
        The page for <Code>"{location.pathname}"</Code> doesn't exist.
      </p>
      <p>
        Head back to the <BodyLink to="/">Home page</BodyLink> to find your way
        again
      </p>
    </Wrapper>
  );
}

export default FourOhFour;
