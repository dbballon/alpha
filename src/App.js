import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropSelect from './Components/DropSelect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DropSelect />
      </header>
    </div>
  );
}

export default App;
