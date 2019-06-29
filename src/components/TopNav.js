// External Dependencies
import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// Local Variables
const NavWrapper = styled.nav`
  background: #0e1e24;
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 0.5em 2.5em;
  color: #fff;
  border-bottom: 4px solid #36b0bb;
`;

const SiteTitle = styled.h3`
  color: #ffd9e2;
  text-shadow: 0 0 0 transparent, 0 0 10px #ff003c,
    0 0 10px rgba(255, 0, 60, 0.5), 0 0 30px #ff003c, 0 0 80px #ff003c,
    0 0 180px #ff003c, 0 0 2600px #ff003c, 0 0 4500px #ff003c, 0 0 800px #ff003c;
  animation: blink 30s infinite alternate;

  @keyframes blink {
    40% {
      opacity: 1;
    }
    42% {
      opacity: 0.8;
    }
    43% {
      opacity: 1;
    }
    45% {
      opacity: 0.2;
    }
    46% {
      opacity: 1;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  margin-left: 32px;
`;

const StyledHomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;

  &.active {
    border-bottom: 2px solid #fafafa;
    padding-bottom: 2px;
  }
`;

// Component Definition
function TopNav() {
  return (
    <NavWrapper>
      <SiteTitle>
        <StyledHomeLink to="/">Netlify API Helper</StyledHomeLink>
      </SiteTitle>
      <List>
        <ListItem>
          <StyledNavLink to="/sites/">Sites</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/account/">Account</StyledNavLink>
        </ListItem>
      </List>
    </NavWrapper>
  );
}

export default TopNav;
