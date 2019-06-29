// External Dependencies
import React from 'react';

// Internal Dependencies
import Header from './components/Header';
import TopNav from './components/TopNav';
import Wrapper from './components/Wrapper';
import './App.css';

// Component Definition
function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <Wrapper>Content</Wrapper>
    </div>
  );
}

export default App;
