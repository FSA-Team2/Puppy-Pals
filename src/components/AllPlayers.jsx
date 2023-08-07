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
      {playersData.map((player) => (
        <div className="button" key={player.id}>
          <Link to={`/players/${player.id}`}>
            <h4>{player.name}</h4>
          </Link>
        </div>
      ))}

      {Array.isArray(playersData) ? (
        playersData.map((player) => (
          <div className="button" key={player.id}>
            <Link to={`/players/${player.id}`}>
              <h4>{player.name}</h4>
            </Link>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}

      <Routes>
        <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
    </div>
  );
};
export default AllPlayers;
 2  
      
      
      {/* return (
      <div>
        {playersData.map((player) => {
          return (
            <ul>


            <li key={player.id}>{player.name}</li>



            </ul>
             */}

