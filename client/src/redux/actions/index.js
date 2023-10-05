import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const FETCH_POKEMON_DETAILS = "FETCH_POKEMON_DETAILS"

export function getPokemons(){
    return async function(dispatch){

        const response = await axios("http://localhost:3001/pokemons")
        console.log(response)

        const pokemons = response.data.results
        
        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
    }
}

export function getPokemonsByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/pokemons/name?name=${name}`);
      console.log(response);

      if (response.data) {
        const pokemonData = response.data;
        dispatch({
          type: GET_POKEMON_BY_NAME,
          payload: pokemonData
        });
      } else {
        console.error("No se recibieron datos del Pokémon.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
}

export const fetchPokemonDetails = (url) => async (dispatch) => {
    try {
      const response = await axios.get(url);
      const { data } = response;
  
      const pokemonDetails = {
        name: data.name,
        image: data.sprites.front_default, // Obtén la URL de la imagen
        types: data.types, // Obtén los tipos
      };
  
      dispatch({ type: "FETCH_POKEMON_DETAILS_SUCCESS", payload: pokemonDetails });
    } catch (error) {
      console.error("Error al cargar los detalles del Pokémon:", error);
    }
  }

  
  