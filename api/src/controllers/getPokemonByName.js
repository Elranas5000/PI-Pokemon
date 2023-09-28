const {Pokemon} = require("../db")
const {Op} = require("sequelize")
const axios = require("axios")

const searchPokemonByName = async (req, res) =>{
    //console.log("entramos en la funcion");

    const {name} = req.query;

    try {
        
        const pokemonFromDB = await Pokemon.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`,
                },
            },
        });


        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        const {data} = await axios.get(apiUrl)

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
        }
        
        const results = pokemonFromDB.concat([pokemonData]); //para que no me envie TODOS los datos del pokemon y resumir la peticion GET

        if(results.length === 0){
            return res.status(404).json({message: "No se encontraron pokemons con ese nombre"})
        }
        return res.status(200).json(results)
    } catch (error) {
        
        return  res.status(500).json({ message: "Error al buscar pokemons por nombre.", error: error.message });
    }

    
}

module.exports = searchPokemonByName;