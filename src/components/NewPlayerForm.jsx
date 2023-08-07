
import { useState } from 'react';

import { createPlayer } from '../API';

const NewPlayerForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [breed, setBreed] = useState('');



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const newPlayerData = {
      name: name,
      age: age,

    };

    try {
      const createdPlayer = await createPlayer(newPlayerData);
      console.log('New player created:', createdPlayer);
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default NewPlayerForm;

