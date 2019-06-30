// External Dependencies
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';
import { connectComponent } from '../../utils';
import { getNetlifyAccount } from '../../state/account/actions';

// Local Variables
const propTypes = {
  isGetting: PropTypes.bool.isRequired,
  onGetNetlifyAccount: PropTypes.bool.isRequired
};

// Component Definition
function Setup(props) {
  const { isGetting, onGetNetlifyAccount } = props;

  console.log('isGetting', isGetting);
  console.log('onGetNetlifyAccount', onGetNetlifyAccount);

  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [accountId, setAccountId] = useState('');

  useEffect(() => {
    if (!isTokenChecked && !hasToken) {
      // While we check for the token, we set an progress indicator
      setTimeout(() => {
        if (process.env.REACT_APP_NETLIFY_KEY) {
          setHasToken(true);
        }
        setIsTokenChecked(true);
      }, 3000);
    } else if (isTokenChecked && !hasToken) {
      setHasToken(false);
    }
  }, [hasToken, isTokenChecked, accountId]);

  const showProgress = !isTokenChecked && !hasToken;

  return (
    <Wrapper>
      <SectionTitle>Let's get your Account info</SectionTitle>
      {showProgress && (
        <div>
          <p>We are checking for your API token...</p>
          <CircularProgress size={50} thickness={5} />
        </div>
      )}
      {!showProgress && hasToken && <p>YES token</p>}
      {!showProgress && !hasToken && <p>NO token</p>}
    </Wrapper>
  );
}

Setup.propTypes = propTypes;

export default connectComponent(
  state => ({
    isGetting: state.account.isGetting
  }),
  {
    onGetNetlifyAccount: getNetlifyAccount
  },
  Setup
);
