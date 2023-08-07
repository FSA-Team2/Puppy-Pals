import { useState, useEffect } from "react";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route, Link } from "react-router-dom";
import { fetchPlayers } from "../API/index";

const AllPlayers = () => {
  const [playersData, setPlayersData] = useState([]);

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




  return (
    <div>
      <h2>AllPlayers</h2>
      {playersData.length === 0 ? (
        <div>If you see this message. Cat Broke something...</div>
      ) : (
        <ul>
          {playersData.map((player) => (
            <li key={player.id}>
              <Link to={`/players/${player.id}`}>
                <img src={player.imageUrl} alt={player.name} />
                <h4>{player.name}</h4>
              </Link>
              {/* Added this Link for the "Player Details" button */}
              <Link to={`/players/${player.id}`}>
                <button>Player Details</button>
              </Link>
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