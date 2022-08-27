import { useState, useCallback } from "react";


const useCounter = (baseValue : number) => {
    const [count, setCount] = useState(baseValue)
    let [inputValue, setInputValue] = useState("")

    const increment = useCallback(() => {
        setCount((count) => count + Number(inputValue))
    },[count]);
    const decrement = useCallback(() => {
        setCount((count) => count - Number(inputValue))
    },[count]);

    return (
        <div>
            <label>Step :</label>
            <input type="text" onChange={(keyPress) => setInputValue(keyPress.target.value)}/>
            <br></br>
            Count: {count}
            <hr />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )

}

export default useCounter