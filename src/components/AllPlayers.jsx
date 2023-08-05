// import React from 'react';
import SinglePlayer from './SinglePlayer';
import { Routes, Route } from "react-router-dom";


const AllPlayers = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<AllPlayers />} />
      <Route path='/players/:id' element={<SinglePlayer />} />
    </Routes>
    </div>
  );
};

export default AllPlayers;