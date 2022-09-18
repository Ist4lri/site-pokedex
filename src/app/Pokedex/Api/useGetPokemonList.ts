import { Query, useQuery } from "react-query";
import * as zod from 'zod';
import { PokemonList } from "../Domain/PokemonList";


const PokemonListSchema = zod.object({
    name: zod.string(),
});

const RawPokemonListSchema = zod.object({
    count: zod.number(),
    next: zod.string().nullable(),
    previous: zod.string().nullable(),
    results: zod.array(PokemonListSchema),
});

type FetchPokemonQuery = { numberOfPokemon: number };

const fetchPokemonKeyList = (query: FetchPokemonQuery) => (["get-number-of-pokemon", query]);

export const fetchListPokemon = async (query: FetchPokemonQuery): Promise<PokemonList> => {
    const { numberOfPokemon } = query;
    let pokemonList = undefined;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}&offset=0`);
    pokemonList = RawPokemonListSchema.parse(await response.json());

    return {
        pokemonCount: pokemonList.count,
        nextPage: pokemonList.next ?? undefined,
        previousPage: pokemonList.previous ?? undefined,
        listOfPokemon: pokemonList.results.map(onePokemon => ({
            name: onePokemon.name,
        }))
    };
};

const useGetPokemonList = (query: FetchPokemonQuery | false) => {
    return useQuery(
        query ? fetchPokemonKeyList(query) : [],
        () => query ? fetchListPokemon(query) : null,
    )
};

export default useGetPokemonList;