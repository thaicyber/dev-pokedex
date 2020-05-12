/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- internal ---------------------- */
import {
  GET_POKEMONS_REQUESTED,
  GET_POKEMONS_SUCCEEDED,
  SHOW_MORE_POKEMONS,
  GET_POKEMON_REQUESTED,
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
  shownPokemons: [],
  page: 1,
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
        shownPokemons: payload.slice(0, 50 * state.page),
        isLoading: false
      };
    case SHOW_MORE_POKEMONS:
      return {
        ...state,
        shownPokemons: [
          ...state.shownPokemons,
          ...state.pokemons.slice(state.page * 50, (state.page + 1) * 50)
        ],
        page: state.page + 1
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
