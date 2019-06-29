// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import NetlifyLogo from './NetlifyLogo.svg';

// Local Variables
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  background: #f2f5f7;
  padding: 2em;
  border-bottom: 5px solid #0e1e24;
`;

// Component Definition
function Header() {
  return (
    <HeaderWrapper>
      <NetlifyLogo />
    </HeaderWrapper>
  );
}

export default Header;
