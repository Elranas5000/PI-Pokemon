const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemonDetail = require('../controllers/idPokemon');
const getPokemon = require('../controllers/pokemonArray');
const searchPokemonByName = require('../controllers/searchPokemonByName');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getPokemon);
router.get('/pokemons/:idPokemon', getPokemonDetail);
router.get('/pokemons/name', searchPokemonByName);


module.exports = router;
