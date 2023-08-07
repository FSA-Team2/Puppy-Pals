import { useState, useEffect } from "react";
import { FetchAllPlayers } from "../API/index";

export default function AllPlayers() {
  const [playersData, setPlayersData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlayersData() {
      try {
        const data = await FetchAllPlayers();
        setPlayersData(data.data);
        console.log("players:", data);
      } catch (error) {
        console.error("Error fetching players:", error);
        setError(error);
      }
    }

    fetchPlayersData();
  }, []);

  if (error) {
    return <div>Error fetching players: {error.message}</div>;
  }

  return (
    <>
      return (
      <div>
        {playersData.map((player, index) => {
          return (
            <div key={index}>
              <h2>name: {player.name}</h2>
              <h2>breed: {player.breed}</h2>

              <hr />
            </div>
          );
        })}
        )
        <hr />
        <hr />
        <hr />
        <div>
          <h2>name: {Object.name}</h2>
          <h2>breed: {Object.breed}</h2>
        </div>
        <hr />
      </div>
    </>
  );
}
