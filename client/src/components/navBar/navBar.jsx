import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../redux/actions";
import styles from "../navBar/navBar.module.css";

function NavBar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonsByName(searchString));
  };

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search a Pokemon"
            type="search"
            onChange={handleChange}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
