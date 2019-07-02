// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

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

// Component Definition
function Options(props) {
  const { user } = props;

  console.log('Options : user :', user);

  return (
    <Wrapper>
      <SectionTitle>Right on, {user.full_name}</SectionTitle>
      <p>Now things are getting interesting. You have options.</p>
    </Wrapper>
  );
}

Options.propTypes = propTypes;
Options.defaultProps = defaultProps;

export default Options;
