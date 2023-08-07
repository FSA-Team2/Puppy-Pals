import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navlinks">
      <nav>
        <ul>
          <li>
            <Link to="/allPlayers" className="allPlayersLink">
              All Players
            </Link>
          </li>
          <li>
            <Link to="/NavBar" className="NavBarLinks">
              NavBar
            </Link>
          </li>
          <li>
            <Link to="/NewPlayerForm" className="NewPlayersForm">
              New Player Form
            </Link>
          </li>
          <li>
            <Link to="/SinglePlayer" className="SinglePlayer">
              Single Player
            </Link>
          </li>
          <li>
            <Link to="/fetchAllPlayers" className="fetchAllPlayers">
              Fetch All Players
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
