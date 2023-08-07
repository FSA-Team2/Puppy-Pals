const API = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-Aaa/players`;


      
    export async function fetchPlayers() {
      try {
        const response = await fetch(API);

    const responseJson = await response.json();

    // console.log(responseJson);
    const players = responseJson.data.players;
    console.log(players);

    return players;
  } catch (error) {
    console.error(error);
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
