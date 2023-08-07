import { useState } from 'react';
import { createPlayer } from '../API';

const NewPlayerForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('field');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newPlayerData = {
      name: name,
      age: age,
      breed: breed,
      imageUrl: imageUrl,
      status: status,
    };

    try {
      const createdPlayer = await createPlayer(newPlayerData);
      console.log('New player created:', createdPlayer);
      alert('New player created successfully!');
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
        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;