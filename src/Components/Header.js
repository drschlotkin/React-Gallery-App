import React from 'react';
import Search from './Search';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';
import Gallery from './Gallery';

const Header = ({title, pictures, history, display, test}) => {
 
  return(
    <header>
      <h1>DEADLY CREATURES</h1>
      <Nav />
      <Search history={history} onSearch={display}/> 
      
      <Gallery pictures={pictures} title={title}  />  
    </header>
  );
};

export default withRouter(Header);
