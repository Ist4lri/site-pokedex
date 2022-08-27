import { useState, useEffect } from "react";

export function useFetch(url : any) {
    const [pokemon, setPokemon] = useState({})
    const [isOK, setIsOK] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        if (!url) return
            setIsOK(true)
            async function fetchData() {
                try {
                    const response = await fetch(url)
                    const pokemon = await response.json()

                    setPokemon(pokemon)
                }
                catch (err) {
                    console.log(err)
                    setError(true)
                }
            }
            fetchData();

        
    }, [url])

return { pokemon, error}

}

