// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Local Variables
const HeaderWrapper = styled.header`
  padding: 4em;
  background: #f2f5f7;
`;

// Component Definition
function Header() {
  return (
    <HeaderWrapper>
      <h4>[Logo goes here]</h4>
    </HeaderWrapper>
  );
}

export default Header;
