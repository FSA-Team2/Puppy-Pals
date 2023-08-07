// import { useState } from 'react'
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css'
import NavBar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer';
import FetchAllPlayers from './API';
import RoutePaths from './components/Routers';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id='container'>
      <NavBar />
      <AllPlayers />
      <NewPlayerForm />
      <SinglePlayer />
      <FetchAllPlayers />
      <RoutePaths />
      </div>
    </>
  )
}

export default App
