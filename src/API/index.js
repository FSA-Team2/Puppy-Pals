const API=`https://fsa-puppy-bowl.herokuapp.com/2302-acc-pt-web-pt-a/`;


export default async function players() {

    try {

        const response= await fetch(API);
        const result= await response.json();
        return result;
        
    } catch (error) {
        console.error("error fetching player data", error)
        
    }
    
}