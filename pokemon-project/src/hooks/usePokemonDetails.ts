import { useState, useEffect } from "react";

interface PokemonDetails {
  id: number;
  name: string;
  type: string;
  image: string;
  spriteFront: string;
  health: number;
  attack: number;
  defense: number;
}

const usePokemonDetails = (url: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) return; 

    const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        setError(""); 

        const id = url.split("/").filter(Boolean).pop(); 
        const storageKey = `pokemon_${id}`;

        const cachedData = localStorage.getItem(storageKey);
        if (cachedData) {
          setPokemon(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
        if (!url) {
    setLoading(false);
    setError("Invalid URL");
    return;
  }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch Pokémon details");

        const details = await res.json();

        const pokemonData: PokemonDetails = {
          id: details.id,
          name: details.name,
          type: details.types?.[0]?.type?.name ?? "unknown",
          image: details.sprites?.other?.["official-artwork"]?.front_default ?? "",
          spriteFront: details.sprites?.front_default ?? "",
          health: details.stats?.find((stat: any) => stat.stat.name === "hp")?.base_stat ?? 0,
          attack: details.stats?.find((stat: any) => stat.stat.name === "attack")?.base_stat ?? 0,
          defense: details.stats?.find((stat: any) => stat.stat.name === "defense")?.base_stat ?? 0,
        };

        localStorage.setItem(storageKey, JSON.stringify(pokemonData));

        setPokemon(pokemonData);
      } catch (err) {
        setError("Failed to fetch Pokémon details");
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  return { pokemon, loading, error };
};

export default usePokemonDetails;
