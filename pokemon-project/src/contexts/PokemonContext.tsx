import { createContext } from "react";

export interface Pokemon {
  name: string;
  url: string;
  id: number; 
}

export interface PokemonContextType {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string;
  setSearchQuery: (query: string) => void;
  setSortByField: (query: string) => void;
  setOffset: (offset: number) => void; 
  offset:number;
  limit:number;
  totalFilteredItems:number;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;
