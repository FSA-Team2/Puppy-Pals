const API = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players`;


      
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

export default fetchPlayers;
