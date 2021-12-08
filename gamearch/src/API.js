const API_URL= "https://api.rawg.io/api/";
const API_KEY = process.env.REACT_APP_API_KEY;
const SEARCH_URL = `${API_URL}games?key=${API_KEY}`;

export const FetchGames = async (search, page) =>{
    if (search) {
        const searchGame = await fetch(`${SEARCH_URL}&search=${search}&page=${page}`);
        const json = await searchGame.json();
        return json
    } else {
        const popularGames =  await fetch(`${SEARCH_URL}&ordering=rating&page=${page}`);
        const json = await popularGames.json();
        return json
    } 
                
}