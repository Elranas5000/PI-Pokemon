import React from "react";
import styles from "../card/card.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Card({ pokemon }) {
  if (!pokemon) {
    return "No se encontró ese pokemon"; 
  }

  const linkStyleRemover = {
    textDecoration: "none",
    color: "#000",
  }

  return (
    <Link  style={linkStyleRemover} to={`/home/${pokemon.id}`}>
      <div className={styles.container}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        {pokemon.types && (
          <div className="types">
            <h3>Types:</h3>
            <ul>
              {pokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
}

export default Card;

