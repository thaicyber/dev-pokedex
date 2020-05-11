/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { createSelector } from 'reselect';

/* ------------------------------------------------------ */
/*                        Selectors                       */
/* ------------------------------------------------------ */
// input non-memoized selectors (do not transform selected data)
const selectPokemonReducer = (state) => state.pokemonReducer;

export const selectPokemons = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.pokemons
);

export const selectSelectedPokemon = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.selectedPokemon
);

export const selectIsLoading = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.isLoading
);

const selectFilterPokemonsInput = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.filterPokemonsInput
);

// memoized selectors (do transform selected data)
export const filteredPokemons = createSelector(
  [selectPokemons, selectFilterPokemonsInput],
  (pokemons, filterPokemonsInput) => {
    return pokemons.filter((pokemon) => {
      const isIncludedInName = pokemon.name.includes(
        filterPokemonsInput.toLowerCase().trim()
      );
      return isIncludedInName;
    });
  }
);
