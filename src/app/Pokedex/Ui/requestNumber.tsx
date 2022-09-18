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
    initialValue: number | undefined,
    onSubmit: (newValue: number | undefined) => void,
}) =>{
  const [numberOfPokemon, setNumberOfPokemon] = useState<number | undefined>(() => initialValue);

    return (
        <nav>
            <label>Entrez le nombre de pokémon souhaité :</label>
            <input type="number" value={numberOfPokemon} onChange={(keyPress) => setNumberOfPokemon(parseInt(keyPress.target.value))}/>
            <Button onClick={() => onSubmit(numberOfPokemon)}>Request</Button>
        </nav>
    );
};

export default Request
