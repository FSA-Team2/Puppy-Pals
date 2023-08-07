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

