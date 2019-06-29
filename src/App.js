// External Dependencies
import React from 'react';

// Internal Dependencies
import Header from './components/Header';
import Routes from './Routes';
import TopNav from './components/TopNav';
import './App.css';

// Component Definition
function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
