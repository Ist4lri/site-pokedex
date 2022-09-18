import { NextPage } from "next";
import styled from "styled-components";
import React, { ReactNode, useState } from "react";
import useGetPokemonList from "app/Pokedex/Api/useGetPokemonList";
import { PokemonList } from "app/Pokedex/Domain/PokemonList";
import RequestNumber from "app/Pokedex/Ui/requestNumber";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [numberOfPokemon, setNumberOfPokemon] = useState<number | undefined>(undefined);
  const result = useGetPokemonList(numberOfPokemon ? { numberOfPokemon } : false);

  const request = <RequestNumber initialValue={numberOfPokemon} onSubmit={setNumberOfPokemon} />

  const { isLoading, isSuccess, isError, ...otherResult } = result;
  const { data: fetchedList } = otherResult;

  if (isLoading) {
    return <div>&apos;Veuillez patienter, chargement en cours...&apos;</div>;
  };

  if (isError) {
    return <div>&apos;Oh oh...il y a eu une erreur...&apos;</div>
  };

  if (isSuccess && fetchedList) {



    return (
      <div>
        {request}
        {fetchedList.listOfPokemon.map((onePokemon) => {
          return (
            <div key={onePokemon.name}>
              NAME : {onePokemon.name}<br />
              <Link href={`/${onePokemon.name}`}>{onePokemon.name}</Link><br />
              <Button onClick={() => router.push(`/${onePokemon.name}`)}>{onePokemon.name}</Button>
            </div>
          );
        })}
      </div>
    )
  };

  return (
    <>
      {request}
    </>
  );

};

export default ListPokemon