import React from "react";
import styles from "../cards/cards.module.css"
import Card from "../card/card"

function Cards({ allPokemons }) {
  const pokemons = Array.isArray(allPokemons) ? allPokemons : [];

  return (
    <div className={styles.container}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
export default Cards;