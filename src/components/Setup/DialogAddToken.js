// External Dependencies
import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

// Local Variables
const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSetNetlifyApiToken: PropTypes.func.isRequired
};

const Title = styled.h4`
  margin: 16px 0 0;
`;

const EmphasizedParagraph = styled.em`
  font-weight: 600;
`;

const Input = styled.input`
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  width: 80%;
  margin-left: 24px;
  box-sizing: border-box;
  color: #0e1e24;
  padding: 6px 14px;
  line-height: 24px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;

  &:focus {
    border-color: #f4bb00;
    box-shadow: 0 0 1px 0 #f4bb00;
  }
`;

// Component Definition
function DialogAddToken(props) {
  const { isOpen, onClose, onSetNetlifyApiToken } = props;

  const [value, setValue] = useState('');

  function handleAddToken() {
    onSetNetlifyApiToken(value);
    return onClose();
  }

  function handleUpdateInputValue(e) {
    setValue(e.target.value);
  }

  return (
    <Dialog maxWidth="sm" onClose={onClose} open={isOpen}>
      <DialogTitle>
        <Title>Netlify API Token needed</Title>
      </DialogTitle>
      <DialogContent>
        <p>
          You can get or generate your very own{' '}
          <EmphasizedParagraph>Netlify API Token&trade;</EmphasizedParagraph>{' '}
          like this:
          <ul>
            <li>Log in to your Netlify account.</li>
            <li>
              Go to{' '}
              <a href="https://app.netlify.com/user/applications">this page</a>{' '}
              in your user application settings.
            </li>
            <li>
              Generate a new <strong>"Personal Access Token"</strong>.
            </li>
            <li>Copy the token and paste it into the text field below.</li>
            <li>
              Smash that <strong>"Add Token"</strong> button.
            </li>
          </ul>
        </p>
        <form>
          <Input
            onChange={handleUpdateInputValue}
            placeholder="API Token"
            value={value}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button disabled={!value} onClick={handleAddToken}>
          Add Token
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogAddToken.propTypes = propTypes;

export default DialogAddToken;
