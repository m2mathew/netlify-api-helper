// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Header from './components/Header';
import Routes from './Routes';
import TopNav from './components/TopNav';
import './App.css';

// Local Variables
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Component Definition
function App(props) {
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
