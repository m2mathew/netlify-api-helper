// External Dependencies
import React, { useState } from 'react';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';

// Local Variables

// Component Definition
function Setup() {
  const [accountId, setAccountId] = useState('');

  return (
    <Wrapper>
      <SectionTitle>Let's get your Account info</SectionTitle>
    </Wrapper>
  );
}

export default Setup;
