const API = 'https://pokeapi.co/api/v2/pokemon/'
// condicion ? resultado true : resultado false
const getData = async(id) =>{
    const apiURL = id ? `${API}${id}` : API;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error){
        console.log('fetch error', error)
    }
}

export default getData