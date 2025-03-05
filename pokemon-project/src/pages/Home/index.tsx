import { FC, useState, useContext } from "react";
import Header from "../../components/header";
import SortDropdown from "../../components/sort";
import GridOption from "../../components/grid";
import PokemonCard from "../../components/card";
import PokemonContext from "../../contexts/PokemonContext";
import Pagination from "../../components/pagination";

const Home: FC = () => {
    const [isGrid, setIsGrid] = useState(true);
    const context = useContext(PokemonContext);
    if (!context) {
      throw new Error("PokemonContext must be used within a PokemonProvider");
    }
    const { pokemonList, loading, error,setSortByField,limit,setOffset,offset,totalFilteredItems } = context;
    
  return (
    <div>
      <Header isNeedSearch={true}/> 
      <div className="p-4 flex justify-between items-center">
        <SortDropdown  setSortOption={setSortByField} />
        <GridOption isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading Pokémon...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <PokemonCard isGrid={isGrid} pokemonList={pokemonList} />
      )}
              <Pagination limit ={limit} setOffset={setOffset} offset={offset} totalFilteredItems={totalFilteredItems}   />

    </div>
  );
};

export default Home;
