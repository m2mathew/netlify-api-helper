// External Dependencies
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import SectionTitle from '../SectionTitle';
import Wrapper from '../Wrapper';
import { connectComponent } from '../../utils';
import { getNetlifyUser, setNetlifyApiToken } from '../../state/user/actions';
import DialogAddToken from './DialogAddToken';

// Local Variables
const propTypes = {
  isGetting: PropTypes.bool.isRequired,
  onGetNetlifyUser: PropTypes.func.isRequired,
  onSetNetlifyApiToken: PropTypes.func.isRequired
};

const AddTokenButton = styled.button`
  background: linear-gradient(160deg, #6102cc 55%, #450291 95%);
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin-top: 2em;
  padding: 12px 32px;

  ::before {
    content: '🤓 ';
  }

  &:hover {
    color: #eee;
  }
`;

// Component Definition
function Setup(props) {
  const { isGetting, onGetNetlifyUser, onSetNetlifyApiToken } = props;

  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [isDialogAddTokenOpen, setIsDialogAddTokenOpen] = useState(false);

  useEffect(() => {
    if (!isTokenChecked && !hasToken) {
      // While we check for the token, we set an progress indicator
      setTimeout(() => {
        if (process.env.REACT_APP_NETLIFY_KEY) {
          setHasToken(true);
        }
        setIsTokenChecked(true);
      }, 1000);
    } else if (isTokenChecked && !hasToken) {
      setHasToken(false);
    } else if (isTokenChecked && hasToken) {
      onGetNetlifyUser(process.env.REACT_APP_NETLIFY_KEY);
    }
  }, [hasToken, isTokenChecked, onGetNetlifyUser]);

  const showProgress = !isTokenChecked && !hasToken;

  function handleToggleDialogAddToken() {
    return setIsDialogAddTokenOpen(!isDialogAddTokenOpen);
  }

  return (
    <Wrapper>
      <SectionTitle>Let's get your User info</SectionTitle>
      {showProgress && (
        <div>
          <p>We are checking for your API token...</p>
          <CircularProgress size={50} thickness={5} />
        </div>
      )}
      {!showProgress && hasToken && (
        <p>Thanks for providing your token. Searching for your user info...</p>
      )}
      {!showProgress && !hasToken && (
        <div>
          <p>No Netlify API Token found. That token is our everything.</p>
          <p>Please click this button to add it to the app.</p>
          <AddTokenButton onClick={handleToggleDialogAddToken}>
            Add Token
          </AddTokenButton>
        </div>
      )}
      <DialogAddToken
        isGettingUser={isGetting}
        isOpen={isDialogAddTokenOpen}
        onClose={handleToggleDialogAddToken}
        onGetNetlifyUser={onGetNetlifyUser}
        onSetNetlifyApiToken={onSetNetlifyApiToken}
      />
    </Wrapper>
  );
}

Setup.propTypes = propTypes;

export default connectComponent(
  state => ({
    isGetting: state.accounts.isGetting
  }),
  {
    onGetNetlifyUser: getNetlifyUser,
    onSetNetlifyApiToken: setNetlifyApiToken
  },
  Setup
);
