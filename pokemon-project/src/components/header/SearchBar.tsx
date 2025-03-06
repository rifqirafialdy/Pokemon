import { FC, useState, useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext";// Import context

const SearchBar: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const context = useContext(PokemonContext);

  if (!context) {
    console.error("PokemonContext is missing in SearchBar!");
    return null;  
  }

  const { setSearchQuery } = context;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex items-center">
      {isSearchActive ? (
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none bg-neutral-100 rounded-md transition-all p-2"
          onChange={handleSearchChange}
          onBlur={() => setIsSearchActive(false)}
        />
      ) : (
        <img
          src="/Vector.png"
          alt="Search"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setIsSearchActive(true)}
        />
      )}
    </div>
  );
};

export default SearchBar;
