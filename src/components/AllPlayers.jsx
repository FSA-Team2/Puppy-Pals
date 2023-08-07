import { useState, useEffect } from "react";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route, Link } from "react-router-dom";
import { fetchPlayers, deletePlayer } from "../API/index";

const AllPlayers = () => {
  const [playersData, setPlayersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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
      <h2>AllPlayers</h2>
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
        <ul>
          {filteredPlayers.map((player) => (
            <li key={player.id}>
              <Link to={`/players/${player.id}`}>
                <img src={player.imageUrl} alt={player.name} />
                <h4>{player.name}</h4>
              </Link>
              <Link to={`/players/${player.id}`}>
                <button>Player Details</button>
              </Link>
              <button onClick={() => handleDelete(player.id)}>Delete</button>
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