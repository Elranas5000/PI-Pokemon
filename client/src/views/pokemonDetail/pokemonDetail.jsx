import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
  const { id } = useParams(); // Obtener el ID del Pokémon de la URL
  const [pokemonDetails, setPokemonDetails] = useState(null);

  // Realizar solicitud para obtener detalles del Pokémon con el ID
  useEffect(() => {
    // Definir la función para cargar los detalles del Pokémon
    const fetchPokemonDetails = async () => {
      try {
        // Realizar la solicitud a tu API o fuente de datos para obtener detalles del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener la información del Pokémon.");
        }
        const data = await response.json();

        // Actualizar el estado 'pokemonDetails' con los detalles del Pokémon
        setPokemonDetails({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types,
          health: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          weight: data.weight,
          height: data.height,
        });
      } catch (error) {
        console.error(error);
        // Manejar el error, por ejemplo, redirigir a una página de error
      }
    };

    // Llamar a la función para cargar los detalles del Pokémon
    fetchPokemonDetails();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.image} alt={pokemonDetails.name} />
      <div>
        <h3>Types:</h3>
        <ul>
          {pokemonDetails.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <p>Health: {pokemonDetails.health}</p>
      <p>Attack: {pokemonDetails.attack}</p>
      <p>Defense: {pokemonDetails.defense}</p>
      <p>Speed: {pokemonDetails.speed}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Height: {pokemonDetails.height}</p>
    </div>
  );
}

export default PokemonDetail;