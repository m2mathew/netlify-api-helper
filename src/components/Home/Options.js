// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';

// Local Variables
const propTypes = {
  user: PropTypes.shape({})
};

const defaultProps = {
  user: null
};

const StyledLink = styled(Link)`
  color: #36b0bb;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;

  &.active {
    border-bottom: 2px solid #fafafa;
    padding-bottom: 2px;
  }
`;

const List = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  line-height: 1.6;
  padding: 6px 0;
  border-bottom: 1px solid lightgrey;
`;

// Component Definition
function Options(props) {
  const { user } = props;

  console.log('Options : user :', user);

  return (
    <Wrapper>
      <SectionTitle>Right on, {user.full_name}</SectionTitle>
      <p>Now things are getting interesting. You have options.</p>
      <List>
        <ListItem>
          <StyledLink to="/sites/">Sites</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/settings/">Settings</StyledLink>
        </ListItem>
      </List>
    </Wrapper>
  );
}

Options.propTypes = propTypes;
Options.defaultProps = defaultProps;

export default Options;
