import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useGetPokemon from "app/Pokedex/Api/useGetPokemon";
import { Pokemon } from "app/Pokedex/Domain/Pokemon";
import Request from "app/Pokedex/Ui/request";

const Home: NextPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  const [pokemonName, setPokemonName] = useState<string | undefined>(undefined);
  const result = useGetPokemon(pokemonName ? { pokemonName } : false);
  
  const request = <Request initialValue={pokemonName} onSubmit={setPokemonName}/>

  const {isLoading, isSuccess, isError, ...otherResult} = result;
  const { data: fetchedPokemon } = otherResult;

  if (isLoading) {
    return <div>'Loading...'</div>;
  }

  if (isError) {
    return <div>'Error...'</div>;
  }

  if (isSuccess && fetchedPokemon) {
    return (
      <>
      {request}
      <div id="find-me">
        <div id="answer">
          <h2 id="name">NAME : {fetchedPokemon.name}</h2>
          <h3 id="type">TYPES: {fetchedPokemon.types.map( oneType => <p>{oneType.name}</p>)}</h3>
          <h4 id="weight">WEIGHT : {fetchedPokemon.weight}</h4>
          <h5 id="pokeId">ID : {fetchedPokemon.pokedexNumber}</h5>
          <img id="image" alt="" src={fetchedPokemon.appearance.shiny.male} width={200} height={200}/>
        </div>
      </div>
      </>   
  );
  }

  return (
      <>
      {request}
      <div id="find-me">
        <div id="answer">
          <h2 id="name"></h2>
          <h3 id="type"></h3>
          <h4 id="weight"></h4>
          <h5 id="pokeId"></h5>
          <Image id="image" alt="" src="" width={200} height={200} />
        </div>
      </div>
      </>           
  );
};

export default Home;
