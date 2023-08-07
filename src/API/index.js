const API = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players`;

export const FetchAllPlayers = async () => {
  try {
    const response = await fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const responseJson = await response.json();

    // console.log(responseJson);
    const players = responseJson.data.players;
    console.log(players);

    return players;
  } catch (error) {
    console.error(error);
  }
};

export default FetchAllPlayers;
