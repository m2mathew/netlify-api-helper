// External Dependencies
import React from 'react';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import UserInfo from './UserInfo';
import Wrapper from '../Wrapper';

// Local Variables

// Component Definition
function Settings() {
  return (
    <Wrapper>
      <SectionTitle>Settings section</SectionTitle>
      <UserInfo />
    </Wrapper>
  );
}

export default Settings;
