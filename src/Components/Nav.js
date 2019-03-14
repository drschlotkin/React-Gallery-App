import React from 'react';
import {NavLink} from 'react-router-dom';

// Navigation bar for main routes

const Nav = () => (
    <div className="main-nav">
      <ul>
        <li><NavLink to ='/mosquito'>Mosquito</NavLink></li>
        <li><NavLink to ='/jellyfish'>Jellyfish</NavLink></li>
        <li><NavLink to ='/humans'>Humans</NavLink></li>
      </ul>
    </div>
);


export default Nav;

