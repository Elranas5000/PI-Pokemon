const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemonDetail = require('../controllers/getPokemonDetail');
const getPokemon = require('../controllers/getPokemon');
const getPokemonByName = require("../controllers/getPokemonByName");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getPokemon);
router.get('/pokemons/name', getPokemonByName);
router.get('/pokemons/:idPokemon', getPokemonDetail);



module.exports = router;
