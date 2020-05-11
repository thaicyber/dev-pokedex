/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- internal ---------------------- */
const CRUDFactory = require('../utils/crudFactory');
const Pokemon = require('../models/Pokemon');

/* ------------------------------------------------------ */
/*                       Controller                       */
/* ------------------------------------------------------ */
const getPokemons = CRUDFactory.getAll(Pokemon, {});
const getPokemon = CRUDFactory.getOne(Pokemon);

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
module.exports = { getPokemons, getPokemon };
