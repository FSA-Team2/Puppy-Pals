// import { useState } from 'react'
import React from 'react'
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css'
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <AllPlayers />
      <NewPlayerForm />
    </>
  );
}

export default App
