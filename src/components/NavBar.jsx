import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navlinks">
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/allPlayers" className="allPlayersLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/NewPlayerForm" className="NewPlayersForm">
              New Player
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;