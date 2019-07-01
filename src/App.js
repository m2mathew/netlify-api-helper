// External Dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Header from './components/Header';
import Routes from './Routes';
import TopNav from './components/TopNav';
import { parseHash, removeHash } from './utils/auth';
import './App.css';

// Local Variables
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Component Definition
function App(props) {
  useEffect(() => {
    const response = parseHash(window.location.hash);
    /* Clear hash */
    removeHash();

    /* Protect against csrf (cross site request forgery https://bit.ly/1V1AvZD) */
    if (response.token && !localStorage.getItem(response.csrf)) {
      alert('Token invalid. Please try to login again');
      return;
    }

    /* Clean up csrfToken */
    localStorage.removeItem(response.csrf);
  }, []);

  return (
    <div>
      <TopNav />
      <Header />
      <MainWrapper>
        <Routes />
      </MainWrapper>
    </div>
  );
}

export default App;
