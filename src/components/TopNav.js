// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Local Variables
const NavWrapper = styled.nav`
  background: #0e1e24;
  display: flex;
  padding: 0.5em 2.5em;
  color: #fff;
  border-bottom: 4px solid #36b0bb;
  box-shadow: 12px 1px grey;
`;

// Component Definition
function TopNav() {
  return (
    <NavWrapper>
      <h4>Netlify API Helper</h4>
    </NavWrapper>
  );
}

export default TopNav;
