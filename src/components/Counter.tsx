import React, { ReactNode, useEffect } from 'react';
import styled from "styled-components";
import useCounter from 'utils/hooks/useCounter';

const Container = styled.div`
    display: flex;
    gap: 8px;
`;

const StyledButton = styled.button`
  background-color: red;
  height: 36px;
  border-radius: 1000px; 
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

const TextCounter = styled.div``;

const Counter = ({
    baseValue,
    step = 0,
    onChange,
}: {
    baseValue: number;
    step?: number;
    onChange: (count: number) => void;
}) => {
    const { count, increment, decrement } = useCounter({ baseValue, step });

    useEffect(() => {
        onChange(count);
    }, [count]);

    return (
        <Container>
            <Button onClick={decrement}>-</Button>
            <TextCounter>Count : {count}</TextCounter>
            <Button onClick={increment}>+</Button>
        </Container>
    );
}

export default Counter;