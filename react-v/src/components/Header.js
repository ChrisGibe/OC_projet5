import React from 'react';
import logo from '../logo.svg';
import './Header.css'

const Header = () => (
    <header className="App-header"> 
        <h1>Générateur de citations : Version React</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </header>    
)

export default Header