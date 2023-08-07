// SinglePlayer.jsx is the component that renders the details of a single player. It is rendered when a player is clicked on in the AllPlayers component.

import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePlayer = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Player Deets - {id}</h1>
      
    </div>
  );
};
export default SinglePlayer;

