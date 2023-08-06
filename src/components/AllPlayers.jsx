//AllPlayers.jsx is the component that renders all the players in the database. It also renders the SinglePlayer component when a player is clicked on. 

import React, { useState, useEffect } from "react";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route, Link } from "react-router-dom";
import { fetchPlayers } from "../API"

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