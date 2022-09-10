export type Pokemon = {
    pokedexNumber: number,
    name: string,
    weight: number,
    types: Array<{
        name: string,
        slot: number,
    }>,
    appearance: {
        male: string,
        female: string | undefined,
        shiny: {
            male: string,
            female: string | undefined,
        }
    }
};