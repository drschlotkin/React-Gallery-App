import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
  
  return(
    <div className="main-nav">
      <ul>
        <li><NavLink to ='/mosquito'>Mosquito</NavLink></li>
        <li><NavLink to ='/jellyfish'>Jellyfish</NavLink></li>
        <li><NavLink to ='/human'>Human</NavLink></li>
      </ul>
    </div>
  );
};

export default Nav;

// Install React Router and set up your <Route> and <Link> or <NavLink> components.
// Include a "Search" link that includes a search field to let users search for photos.
// Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.
// The current route should be reflected in the URL.

