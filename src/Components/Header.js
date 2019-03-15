import React from 'react';
import Search from './Search';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';
import Gallery from './Gallery';

/*This stateless function holds three components:
<Nav /> Creates the navigation menu 
<Search /> Takes the search query and sends it back to <App /> and then to <Gallery /> to be processed
<Gallery /> Displays the picture data to the DOM */

const Header = ({title, pictures, history, display, loadState}) => {
  
  return(
    <header>
      <h1>DEADLY CREATURES</h1>
      <Nav />
      <Search history={history} onSearch={display}/> 
      <Gallery pictures={pictures} title={title} loading={loadState}/> 
    </header>
  );
};

export default withRouter(Header);
