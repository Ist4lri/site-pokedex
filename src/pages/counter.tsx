import React, { ReactNode, useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: pink;
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

const Container = styled.div``;

const TextCounter = styled.div``;

const Counter = ({ step, initialValue }: CounterProps) => {
  const [countState, setCountState] = useState(initialValue);

  return (
    <Container>
      <Button onClick={() => setCountState(countState + step)}>Add</Button>
      <TextCounter>{countState}</TextCounter>
    </Container>
  );
};

const CounterPage: NextPage = () => {
  return <Counter step={2} initialValue={10} />;
};

export default CounterPage;
