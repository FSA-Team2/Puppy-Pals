//navbar.jsx for all pages

import React from 'react';
import { Link } from 'react-router-dom';
import AllPlayers from './AllPlayers';

const NavBar = () => {
  return (
    <nav>
    <ul>
    <li><Link to="/AllPlayers"></Link></li>
    <li><Link to="/NavBar"></Link></li>
    <li><Link to="/NewPlayerForm"></Link></li>
   <li><Link to="/SinglePlayer"></Link></li>
    </ul>
    </nav>
  );
};

export default NavBar;