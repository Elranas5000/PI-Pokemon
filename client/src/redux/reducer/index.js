import { GET_POKEMONS, GET_POKEMON_BY_NAME } from "../actions/index";

//aqui tendremos el estado inicial, para empezar
let initialState = {allPokemons:[], allPokemonsCopy:[], searchedPokemon: null}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload  
            }

        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                allPokemons: action.payload
            }

        default: return state;
    }
}

export default rootReducer;