import React from "react";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route, Link } from "react-router-dom";
import { fetchPlayers, deletePlayer } from "../API/index";

const AllPlayers = () => {
  const [playersData, setPlayersData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    async function fetchPlayersData() {
      try {
        const data = await fetchPlayers();
        setPlayersData(data);
      } catch (error) {
        console.error("Beeeep Booop ", error);
      }
    }
    fetchPlayersData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePlayer(id);
      setPlayersData(playersData.filter((player) => player.id !== id));
    } catch (error) {
      console.error("Error deleting player: ", error);
    }
  };

  const filteredPlayers = playersData.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Puppy Bowl Players</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredPlayers.length === 0 ? (
        <div>No players found.</div>
      ) : (
        <ul className="card-list">
          {filteredPlayers.map((player) => (
            <li key={player.id} className="card">
              <Link to={`/players/${player.id}`} className="card-link">
                <img src={player.imageUrl} alt={player.name} />
                <h4>{player.name}</h4>
              </Link>
              <Link to={`/players/${player.id}`} className="card-link">
                <button className="card-button">Player Details</button>
              </Link>
              <button onClick={() => handleDelete(player.id)} className="card-button">Delete</button>
            </li>
          ))}
        </ul>
      )}
      <Routes>
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
};

export default AllPlayers;