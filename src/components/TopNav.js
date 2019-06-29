// External Dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Local Variables
const NavWrapper = styled.nav`
  background: #0e1e24;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2.5em;
  color: #fff;
  border-bottom: 4px solid #36b0bb;
  box-shadow: 12px 1px grey;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  margin-left: 16px;
`;

// Component Definition
function TopNav() {
  return (
    <NavWrapper>
      <h4>Netlify API Helper</h4>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/sites/">Sites</Link>
        </ListItem>
        <ListItem>
          <Link to="/about/">About</Link>
        </ListItem>
      </List>
    </NavWrapper>
  );
}

export default TopNav;
