import { useState, useEffect } from "react";
import PokemonContext, { Pokemon, PokemonContextType } from "./PokemonContext";

const LIST_LOCAL_STORAGE_NAME = "pokemonListStorage";

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [totalFilteredItems, setTotalFilteredItems] = useState<number>(0);


  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        let fullList: Pokemon[] = [];

        const storedData = localStorage.getItem(LIST_LOCAL_STORAGE_NAME);
        if (storedData) {
          fullList = JSON.parse(storedData);
        } else {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`);
          const data = await res.json();
          fullList = data.results.map((pokemon: any, index: number) => ({
            name: pokemon.name,
            url: pokemon.url,
            id: index + 1, 
          }));
          localStorage.setItem(LIST_LOCAL_STORAGE_NAME, JSON.stringify(fullList));
        }

        setPokemonList(fullList);
      } catch (err) {
        setError("Failed to fetch Pokémon list");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    let sortedList = [...pokemonList];

    if (sortOption === "Sort by Name") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "Sort by ID") {
      sortedList.sort((a, b) => a.id - b.id);
    }

    let filteredList = sortedList;
    if (searchQuery) {
      filteredList = sortedList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    const totalFilteredItems = filteredList.length;
    const paginatedList = filteredList.slice(offset, offset + limit);
    setFilteredPokemonList(paginatedList);
  
    setTotalFilteredItems(totalFilteredItems);
  }, [pokemonList, searchQuery, sortOption, offset, limit]);
  const value: PokemonContextType = {
    pokemonList: filteredPokemonList,
    loading,
    error,
    setSearchQuery,
    setSortByField: setSortOption,
    setOffset,
  limit,
  offset,
  totalFilteredItems, 
  };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};
