import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Select from './components/Select'
import CheckBox from './components/Checkbox'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Header />
        <div className="block-1">
          <Select />
          <CheckBox />
        </div>
      <Button />  
    </div>
  );
}

export default App;
