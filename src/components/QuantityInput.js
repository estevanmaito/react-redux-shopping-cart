import React from "react";
import styled from "styled-components";

export const QuantityInput = props => (
  <Wrapper>
    <Button onClick={props.onDecrement}>-</Button>
    <Quantity>{props.quantity}</Quantity>
    <Button onClick={props.onIncrement}>+</Button>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50px;
  height: 20px;
  box-shadow: 0 0 0 1px #ccc;
  border-radius: 3px;
`;

const Quantity = styled.span`
  width: 20px;
  text-align: center;
  display: inline-block;
`;
Quantity.displayName = "Quantity";

const Button = styled.button`
  box-sizing: border-box;
  width: 15px;
  height: 100%;
  padding: 1px;
  border: none;
  outline: none;
  text-align: center;
  background-color: transparent;
  transition: background 0.1s ease-in-out;

  &:active {
    background-color: #eee;
  }
`;

export default QuantityInput;
