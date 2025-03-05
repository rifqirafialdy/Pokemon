import { FC } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const DetailsPage: FC = () => {
  const { id } = useParams();
  if (!id) return <p className="text-red-500">Invalid Pokémon ID</p>;

  const { pokemon, loading, error } = usePokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (loading) return <p className="text-center text-gray-600">Loading Pokémon details...</p>;
  if (error || !pokemon) return <p className="text-center text-red-500">Error loading details</p>;

  const maxHealth = pokemon.health;
  const remainingHealth = pokemon.health - 30;
  const healthPercentage = (remainingHealth / maxHealth) * 100;

  return (
    <div>
      <Header isNeedSearch={false} />
      <div className="p-5 flex flex-col m-7">
        <h1 className="text-2xl font-bold capitalize text-[#97A0CC] text-start">#{pokemon.id}</h1>

        <div className="flex items-center justify-center">
          <img
            src={pokemon.image}
            alt={`${pokemon.name} official artwork`}
            className="w-40 h-40 object-contain"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <h1 className="capitalize font-bold text-4xl text-neutral-100">{pokemon.name}</h1>
          <img src={pokemon.spriteFront} alt={`${pokemon.name} sprite`} className="w-20" />
        </div>

        <div className="mt-2 bg-[#05091B] p-4 rounded-lg shadow-md space-y-4">
          <div>
            <p className="text-2xl font-semibold text-[#97A0CC] mb-2">Health</p>
            <div className="w-full bg-gray-700 rounded-full h-4 relative">
              <div
                className="h-4 rounded-full transition-all duration-300"
                style={{
                  width: `${healthPercentage}%`,
                  backgroundColor: healthPercentage > 50 ? "green" : healthPercentage > 25 ? "yellow" : "red",
                }}
              ></div>
            </div>
            <p className="mt-2 text-xl text-neutral-100 ">{remainingHealth} from {maxHealth}</p>
          </div>

          <div className="flex justify-between items-center text-white border-t border-gray-600 pt-3">
            <div>
            <p className="text-2xl font-semibold text-[#97A0CC] mb-2">Attack </p>
<p className="mt-2 text-xl text-neutral-100">{pokemon.attack}</p>
            </div>
            <div>
            <p className="text-2xl font-semibold text-[#97A0CC] mb-2">Defense </p>
<p className="mt-2 text-xl text-neutral-100">{pokemon.defense}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
