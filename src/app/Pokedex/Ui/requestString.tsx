import React, { ReactNode, useState} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border-radius: 1000px
`;

const Button = ({children, onClick}: {
    children: ReactNode;
    onClick: () => void;
 }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
};

const Request = ({
    initialValue,
    onSubmit,
}:{
    initialValue: string | undefined,
    onSubmit: (newValue: string | undefined) => void,
}) =>{
  const [pokemonName, setPokemonName] = useState<string | undefined>(() => initialValue);

    return (
        <nav>
            <label>Entrez un nom de pokémon :</label>
            <input type="text" value={pokemonName} onChange={(keyPress) => setPokemonName(keyPress.target.value)}/>
            <Button onClick={() => onSubmit(pokemonName)}>Request</Button>
        </nav>
    );
};

export default Request
