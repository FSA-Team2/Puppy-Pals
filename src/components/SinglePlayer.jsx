import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlayers } from '../API/index';

const SinglePlayer = () => {
  const { id } = useParams();
  const [playersData, setPlayersData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

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

  const player = playersData.find((player) => player.id === Number(id));

  if (!player || playersData.length === 0) {
    return <div>If this doesn't work Cat broke something. Again</div>;
  }

  return (
    <div className='returnDetails'>
      <h1>Player Detail - {player.name}</h1>
      <img src={player.imageUrl} alt={player.name} />
      <p>Name: {player.name}</p>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>

      {showDetails ? (
        <div className='showPlayerDetails'>
          <p>Team ID: {player.teamId}</p>
          <p>Team Name: {player.teamName}</p>
          <p>Created At: {player.createdAt}</p>
          <p>Updated At: {player.updatedAt}</p>
        </div>
      ) : (
        <button className='detailsButton' onClick={() => setShowDetails(true)}>Show Details</button>
      )}
      <button className='goBack'>
        <Link to="/">Back to All Players</Link></button> 
    </div>
  );
};

export default SinglePlayer;