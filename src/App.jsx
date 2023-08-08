//App.jsx is the main file that renders all the components
import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import { fetchPlayers } from "./API/index";
import './App.css'
import './index.css'



function App() {
  return (
    <>
      <div id='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/allPlayers' element={<AllPlayers />} />
          <Route path='/newPlayerForm' element={<NewPlayerForm />} />
          <Route path='/players/:id' element={<SinglePlayer />} />

        </Routes>
      </div>
    </>
  );
}
export default App
