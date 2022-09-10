export type PokemonList = {
    pokemonCount: number,
    nextPage: string | undefined,
    previousPage: string | undefined,
    listOfPokemon : Array<{
        name: string,
        url: string,
    }>,
};