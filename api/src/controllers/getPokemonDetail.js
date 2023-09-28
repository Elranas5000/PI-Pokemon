const axios = require("axios");
const { Pokemon } = require("../db"); 

const getPokemonDetail = async (req, res) => {
    const id = req.params.idPokemon;

    try {
        // Primero, intenta buscar el Pokémon en la base de datos
        
        const pokemonFromDB = await Pokemon.findByPk(id)
        
        if (pokemonFromDB) {
            return res.status(200).json(pokemonFromDB);
        }else{
            // Si no se encontró en la base de datos, entonces lo busca en la API
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const { data } = await axios.get(apiUrl);

        const pokemonData = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            weight: data.weight,
            height: data.height, 
        };

        return res.status(200).json(pokemonData);
        }

        
    } catch (error) {
        return res.status(500).json({ message: "Error al buscar en la base de datos o en la PokéAPI", error: error.message });
    }
};

module.exports = getPokemonDetail;