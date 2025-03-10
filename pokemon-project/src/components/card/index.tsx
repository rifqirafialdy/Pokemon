import { FC } from "react";
import Card from "./card";
import usePokemonDetails from "../../hooks/usePokemonDetails";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonCardProps {
  isGrid: boolean;
  pokemonList: Pokemon[];
}

const PokemonItem: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const { pokemon: details, loading, error } = usePokemonDetails(pokemon.url);

  if (loading) return <p className="text-center text-gray-600">Loading {pokemon.name}...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!details) return null;

  return <Card key={details.id} name={details.name} id={details.id} type={details.type} image={details.image} />;
};

const PokemonCard: FC<PokemonCardProps> = ({ isGrid, pokemonList }) => {
  return (
    <div className={`grid ${isGrid ? "grid-cols-2 gap-4" : "grid-cols-1"} justify-center items-center px-10`}>
      {pokemonList.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonCard;
