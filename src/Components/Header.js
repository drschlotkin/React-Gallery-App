import React from 'react';
import Search from './Search';
import Nav from './Nav';

const Header = props => (
  <header>
    <h1>DEADLY CREATURES</h1>
    
    <Nav />
    <Search onSearch={props}/>
    
  </header>
);

export default Header;