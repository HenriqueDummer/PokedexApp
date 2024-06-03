import React from "react";
import useFetch from "../hooks/useFetch";

const PokeCard = ({ pokemon, setError }) => {
  const { fetchedData: pokemonData, error, isLoading } = useFetch(pokemon.url);

  if (error) {
    setError(error);
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <>
      {pokemonData && (
        <div className="poke_card">
          <header>
            {/* <img
              src="https://static-00.iconduck.com/assets.00/pokeball-icon-2048x2046-npbb7ah7.png"
              alt=""
            /> */}
            <p>{pokemon.name}</p>
            <p></p>
          </header>
          <img src={pokemonData.sprites.other['official-artwork'].front_default} alt="" />
        </div>
      )}
    </>
  );
};

export default PokeCard;
