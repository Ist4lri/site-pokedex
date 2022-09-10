import { useCallback } from "react";
import { useQuery } from 'react-query';
import { Pokemon } from "app/Pokedex/Domain/Pokemon"
import * as zod from 'zod';

const PokemonTypeSchema = zod.object({
    slot: zod.number(),
    type: zod.object({
        name: zod.string(),
    })
});

const PokemonSchema = zod.object({
    id: zod.number(),
    weight: zod.number(),
    name: zod.string(),
    sprites: zod.object({
        front_default: zod.string(),
        front_shiny: zod.string(),
        front_female: zod.string().nullable(),
        front_shiny_female: zod.string().nullable(),
    }),
    types: zod.array(PokemonTypeSchema),
});

type FetchPokemonQuery = { pokemonName: string };

const fetchPokemonKey = (query: FetchPokemonQuery) => (["get-pokemon", query]);

const fetchPokemon = async (query: FetchPokemonQuery): Promise<Pokemon> => {
    const { pokemonName } = query;
    let pokemon = undefined;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    pokemon = PokemonSchema.parse(await response.json()); 

    return {
        pokedexNumber: pokemon.id,
        name: pokemon.name,
        weight: pokemon.weight,
        types: pokemon.types.map(oneType => ({
            name: oneType.type.name,
            slot: oneType.slot,
        })),
        appearance: {
            male: pokemon.sprites.front_default,
            female: pokemon.sprites.front_female ?? undefined,
            shiny: {
                male: pokemon.sprites.front_shiny,
                female: pokemon.sprites.front_shiny_female ?? undefined,
            }
        }
    };
};

const useGetPokemon = (query: FetchPokemonQuery | false) => {
    return useQuery(
        query ? fetchPokemonKey(query) : [],
        () => query ? fetchPokemon(query) : null,
    );
};

export default useGetPokemon;
