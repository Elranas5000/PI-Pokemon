const axios = require("axios");
const { PokemonType } = require("../db");

const getTypes = async (req, res) => {
    try {
        // Intenta obtener todos los tipos de Pokémon de la base de datos
        const typesFromDB = await PokemonType.findAll();

        // Si hay tipos en la base de datos, los devuelve
        if (typesFromDB.length > 0) {
            return res.status(200).json(typesFromDB);
        } else {
            // Si no hay tipos en la base de datos, los obtiene de la API
            const apiUrl = "https://pokeapi.co/api/v2/type";
            const { data } = await axios.get(apiUrl);

            // Extrae los nombres de los tipos de la respuesta de la API
            const typesFromAPI = data.results.map((result) => ({
                name: result.name,
            }));

            // Crea los tipos en la base de datos
            const createdTypes = await PokemonType.bulkCreate(typesFromAPI);

            return res.status(200).json(createdTypes);
        }
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener los tipos de pokémon", error: error.message });
    }
};

module.exports = getTypes;