import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokemonCard } from "./PokemonCard";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { pokeAPIData, loading } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="card-grid">
          {pokeAPIData.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </>
  );
};
