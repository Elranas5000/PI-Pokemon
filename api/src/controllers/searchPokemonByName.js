const {Pokemon, sequelize} = require("../db")
const axios = require("axios")

const searchPokemonByName = async (req, res) =>{
    const {name} = req.query;

    console.log(name);

    try {
        
        const pokemonFromDB = await Pokemon.findAll({
            where:{
                name:{
                    [sequelize.Op.iLike]: `%${name}%`,
                },
            },
        });


        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        const {data} = await axios.get(apiUrl)
        
        const results = pokemonFromDB.concat([data]);

        if(results.length === 0){
            return res.status(404).json({message: "No se encontraron pokemons con ese nombre"})
        }
        return res.status(200).json(results)
    } catch (error) {
        
        return  res.status(500).json({ message: "Error al buscar pokemons por nombre.", error: error.message });
    }

    
}

module.exports = searchPokemonByName;