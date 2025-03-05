import { useState, useEffect, useContext } from "react";
import PokemonContext from "../contexts/PokemonContext";


const usePokemonList = (limit: number, sortOption: string, searchQuery: string, offset: number) => {
    const context = useContext(PokemonContext);
    if (!context) {
      throw new Error("usePokemonList must be used within a PokemonProvider");
    }
    const { pokemonList, loading, error, setSearchQuery, setSortByField } = context;  
    const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);

  useEffect(() => {
    setSearchQuery(searchQuery);
    setSortByField(sortOption);
  }, [searchQuery, sortOption, setSearchQuery, setSortByField]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredPokemonList(
        pokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredPokemonList(pokemonList);
    }
  }, [searchQuery, pokemonList]);

  return { pokemonList: filteredPokemonList, loading, error };
};

export default usePokemonList;
