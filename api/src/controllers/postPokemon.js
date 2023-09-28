const {Pokemon, PokemonType} = require('../db')

const postPokemon = async (req, res) =>{
    try {
        const {name, img, health, attack, defense, speed, height, weight, types} = req.body

        const newPokemon = await Pokemon.create({
            name,
            img,
            health,
            attack,
            defense,
            speed,
            height,
            weight,
        });

        await newPokemon.setPokemonTypes(types);

        return res.status(201).json(newPokemon)
    } catch (error) {
        return res.status(500).json({message: 'Error al crear el Pokemon', error: error.message})
    }
}

module.exports = postPokemon;