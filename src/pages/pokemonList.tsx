import { NextPage } from "next";
import styled from "styled-components";
import React, { ReactNode, useState } from "react";
import useGetPokemonList from "app/Pokedex/Api/useGetPokemonList";
import { PokemonList } from "app/Pokedex/Domain/PokemonList";

const StyledButton = styled.button`
  background-color: blue;
  height: 36px;
  border-radius: 1000px;
  text-color: red;
`;

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const ListPokemon: NextPage = () => {
    const [numberOfPokemon, setNumberOfPokemon] = useState<number | undefined>(undefined);
    const result = useGetPokemonList(numberOfPokemon ? {numberOfPokemon} : false)
    const {isLoading, isSuccess, isError, ...otherResult} = result;
    const { data: fetchedList } = otherResult;

    if (isLoading){
        return <div>'Veuillez patienter, chargement en cours...</div>;
    }

    if (isError){
        return <div>'Oh oh...il y a eu une erreur...</div>
    }

    if (isSuccess && fetchedList) {
        for (let i = 0; i < fetchedList.listOfPokemon.length; i++){
            return (
            <>
                <div>NAME : {fetchedList.listOfPokemon.map( oneType => <p>{oneType.name}</p> )}</div>
                <div>URL : {fetchedList.listOfPokemon.map( oneType => <p>{oneType.url}</p> )}</div>
            </>
            )
        };
    };

    return ( <p>Coucou</p>)
}

export default ListPokemon