// import { useState } from 'react'
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css'
import NavBar from './components/NavBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
      <AllPlayers />
      <NewPlayerForm />
      </div>
    </>
  )
}

export default App
