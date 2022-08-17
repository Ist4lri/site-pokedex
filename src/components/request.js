import { useState } from 'react'

async function onClick(userValue) {
    const realUserValue = userValue.toLowerCase()
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + realUserValue);
    var pokemon = await response.json();

    console.log({pokemon})

    /*
    document.getElementById("name").innerText = "Nom : " + pokemon.name;
    document.getElementById("weight").innerText = "Il fait " + pokemon.weight + "g";
    document.getElementById("type").innerText = "Il est de type(s) " + pokemon.types.map((singleType) => singleType.type.name + " ")
    document.getElementById("pokeId").innerText = "ID du pokémon : " + pokemon.id;
    document.getElementById("image").setAttribute("src", pokemon.sprites.front_default);
    */
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

export default Request