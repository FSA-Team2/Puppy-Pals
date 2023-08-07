
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
          <li></li>
          <li>
            <Link to="/NewPlayerForm" className="NewPlayersForm">
              New Player
            </Link>
          </li>
          <li>
            <Link to="/SinglePlayer" className="SinglePlayer">
              Single Player
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;




