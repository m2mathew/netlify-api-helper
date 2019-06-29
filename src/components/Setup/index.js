// External Dependencies
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';

// Local Variables

// Component Definition
function Setup() {
  const [accountId, setAccountId] = useState('');

  useEffect(() => {
    if (process.env.REACT_APP_NETLIFY_KEY) {
    }

    setTimeout(() => {}, 3000);
  });

  return (
    <Wrapper>
      <SectionTitle>Let's get your Account info</SectionTitle>
      <p>We are checking for your API token...</p>
      <p>{}</p>
    </Wrapper>
  );
}

export default Setup;
