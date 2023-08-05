//index.js is the entry point for the API folder. It exports all the functions that will be used to make API calls to the backend.

//const API = `https://fsa-puppy-bowl.herokuapp.com/2302-acc-pt-web-pt-a/`;
const API = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players';
export async function fetchPlayers() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching player data", error);
    throw error;
  }
}

export async function createPlayer(playerData) {
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating player", error);
    throw error;
  }
}