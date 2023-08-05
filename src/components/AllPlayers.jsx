// import React from 'react';
import SinglePlayer from "./SinglePlayer";
import { Routes, Route } from "react-router-dom";
import players from "../API";
import { useState, useEffect } from 'react'

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const apiUrl = `https://fsa-puppy-bowl.herokuapp.com/2302-acc-pt-web-pt-a/`;

    async function fetchP() {
      try {
        const response = await players(apiUrl);
        // const data = await response.json();

        setPlayers(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchP();
  }, []);

  return (
    <div>
    {
      players.map((players) => {
        return (
          <div className="button" onClick={() => setPlayers(players.id)} key={players.is}><h4>{players.name}</h4>

          
          
      <Routes>
       <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div> 



        )
      })
    }
    </div>






     
   );
 };

export default AllPlayers;
