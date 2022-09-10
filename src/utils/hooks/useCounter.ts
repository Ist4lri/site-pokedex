import { useState, useCallback } from "react";

type CounterProps = {
    baseValue: number;
    step: number
};

type CounterResult = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

const useCounter = ({baseValue , step} : CounterProps): CounterResult => {
    const [count, setCount] = useState(baseValue)

    const increment = useCallback(() => {
        setCount((c) => c + step)
    },[count]);
    const decrement = useCallback(() => {
        setCount((c) => c - step)
    },[count]);

    return {count, increment, decrement};

}

export default useCounter
