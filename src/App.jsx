//App.jsx is the main file that renders all the components
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
