import { NextPage } from "next";
import styled from "styled-components";
import React, { ReactNode } from "react";
import Counter from "components/Counter";

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

type CounterProps = {
  step: number;
  initialValue: number;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextCounter = styled.div``;

const PageCounter: NextPage = () => {
    return (
        <Container>
            <Counter baseValue={0} onChange={(count) => {
                console.log(count);
            }}/>
        </Container>
    )
}

export default PageCounter
