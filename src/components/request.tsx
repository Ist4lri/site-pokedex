import React, { ReactNode, useState} from 'react'
import styled from 'styled-components'
import { useFetch } from 'utils/hooks/fetch';

const StyledButton = styled.button`
    border-radius: 1000px
`;

const Button = ({children, onClick}: {
    children: ReactNode;
    onClick: () => void;
 }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
};

const sendRequest = (pokemonRequest: string) => {
    const pokemon = useFetch('https://pokeapi.co/api/v2/'+ pokemonRequest)
    
};



const Request = () =>{
    let [inputValue, setInputValue] = useState("")
    return (
        <nav>
            <label>Entrez un nom de pokémon :</label>
            <input type="text" onChange={(keyPress) => setInputValue(keyPress.target.value)}/>
            <Button onClick={() => sendRequest(inputValue)}>Request</Button>
        </nav>
    );
};

export default Request

/*async function onClick(userValue: string) {
    const realUserValue = userValue.toLowerCase()
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + realUserValue);
    var pokemon = await response.json();

    alert(pokemon.types.map((singleType: { type: { name: any; }; }) => singleType.type.name))  

    return (pokemon) 
}

<div id="request">
        <label>Entrez un nom de Pokémon : <input
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                /></label>
        <button id="searchPokemon" onClick={() => onClick(inputValue)}>Search</button>
        <br></br>
        <div id="exist"></div>
        </div>
        
const [inputValue, setInputValue] = useState('')



*/
