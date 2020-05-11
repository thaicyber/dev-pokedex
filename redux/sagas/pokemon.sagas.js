/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
/* ---------------------- internal ---------------------- */
import {
  GET_POKEMONS_REQUESTED,
  GET_POKEMON_REQUESTED
} from '@/redux/types/pokemon.types';

import {
  getPokemonsSucceeded,
  getPokemonSucceeded,
  clearFilterPokemonsInput,
  requestFailed
} from '@/redux/actions/pokemon.actions';

/* ------------------------------------------------------ */
/*                          Saga                          */
/* ------------------------------------------------------ */
/* ----------------------- Worker ----------------------- */
export function* getPokemons() {
  try {
    const req = yield call(
      axios.get,
      `${process.env.BASE_URL}/api/v1/pokemons`
    );
    const { data } = yield req.data;
    yield put(getPokemonsSucceeded(data));
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export function* getPokemon({ payload }) {
  try {
    const req = yield call(
      axios.get,
      `${process.env.BASE_URL}/api/v1/pokemons/${payload}`
    );
    const { data } = yield req.data;
    yield put(getPokemonSucceeded(data));
    yield put(clearFilterPokemonsInput());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

/* ----------------------- Watcher ---------------------- */
function* watchGetPokemonsRequest() {
  yield takeLatest(GET_POKEMONS_REQUESTED, getPokemons);
}

function* watchGetPokemonRequest() {
  yield takeLatest(GET_POKEMON_REQUESTED, getPokemon);
}

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export function* pokemonSagas() {
  yield all([call(watchGetPokemonsRequest), call(watchGetPokemonRequest)]);
}
