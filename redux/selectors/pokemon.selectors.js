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

const selectPokemons = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.pokemons
);

const selectShownPokemons = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.shownPokemons
);

export const selectPage = createSelector(
  [selectPokemonReducer],
  (pokemonReducer) => pokemonReducer.page
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
  [selectPokemons, selectShownPokemons, selectFilterPokemonsInput],
  (pokemons, shownPokemons, filterPokemonsInput) =>
    filterPokemonsInput === ''
      ? shownPokemons
      : pokemons.filter((pokemon) => {
          const isIncludedInName = pokemon.name.includes(
            filterPokemonsInput.toLowerCase().trim()
          );
          return isIncludedInName;
        })
);
