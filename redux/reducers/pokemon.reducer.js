/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- internal ---------------------- */
import {
  GET_POKEMONS_REQUESTED,
  GET_POKEMON_REQUESTED,
  GET_POKEMONS_SUCCEEDED,
  GET_POKEMON_SUCCEEDED,
  SET_FILTER_POKEMONS_INPUT,
  CLEAR_FILTER_POKEMONS_INPUT,
  REQUEST_FAILED
} from '@/redux/types/pokemon.types';

/* ------------------------------------------------------ */
/*                         Reducer                        */
/* ------------------------------------------------------ */
const INITIAL_STATE = {
  pokemons: [],
  selectedPokemon: null,
  isLoading: true,
  filterPokemonsInput: '',
  error: null
};

const pokemonReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS_REQUESTED:
    case GET_POKEMON_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_POKEMONS_SUCCEEDED:
      return {
        ...state,
        pokemons: payload,
        isLoading: false
      };
    case GET_POKEMON_SUCCEEDED:
      return {
        ...state,
        selectedPokemon: payload,
        isLoading: false
      };
    case SET_FILTER_POKEMONS_INPUT:
      return {
        ...state,
        filterPokemonsInput: payload
      };
    case CLEAR_FILTER_POKEMONS_INPUT:
      return {
        ...state,
        filterPokemonsInput: ''
      };
    case REQUEST_FAILED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default pokemonReducer;
