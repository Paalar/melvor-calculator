import React from 'react';
import logo from './logo.svg';
import './App.css';
import { expTableAsLvls } from 'data/experienceTable';
import Dropdown from 'react-dropdown';

const App = () => {
  return (
    <div className="App">
      <Dropdown options={expTableAsLvls()} value={expTableAsLvls()[98]} />
    </div>
  );
}

export default App;
