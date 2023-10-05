const axios = require("axios")

const getPokemon = async(req, res) =>{
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";

    try {
        const {data} = await axios.get(apiUrl)

        data ? res.status(200).json(data) : res.status(404).send("Not found")
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getPokemon;