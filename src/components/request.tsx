import { useState } from 'react'

async function onClick(userValue: string) {
    const realUserValue = userValue.toLowerCase()
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + realUserValue);
    var pokemon = await response.json();

    alert(pokemon.types.map((singleType: { type: { name: any; }; }) => singleType.type.name))  

    return (pokemon) 
}


function Request() {
    const [inputValue, setInputValue] = useState('')
    return (
        <div id="request">
        <label>Entrez un nom de Pokémon : <input
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                /></label>
        <button id="searchPokemon" onClick={() => onClick(inputValue)}>Search</button>
        <br></br>
        <div id="exist"></div>
        </div>
    )
}

export default Request; onClick