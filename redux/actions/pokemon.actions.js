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
/*                         Action                         */
/* ------------------------------------------------------ */
export const getPokemonsRequested = () => ({
  type: GET_POKEMONS_REQUESTED
});

export const getPokemonsSucceeded = (data) => ({
  type: GET_POKEMONS_SUCCEEDED,
  payload: data
});

export const showMorePokemons = () => ({
  type: SHOW_MORE_POKEMONS
});

export const getPokemonRequested = (data) => ({
  type: GET_POKEMON_REQUESTED,
  payload: data
});

export const getPokemonSucceeded = (data) => ({
  type: GET_POKEMON_SUCCEEDED,
  payload: data
});

export const setFilterPokemonsInput = (data) => ({
  type: SET_FILTER_POKEMONS_INPUT,
  payload: data
});

export const clearFilterPokemonsInput = () => ({
  type: CLEAR_FILTER_POKEMONS_INPUT
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: error
});
