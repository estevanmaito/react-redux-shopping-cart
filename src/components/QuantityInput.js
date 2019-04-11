import React from "react";
import styled from "styled-components";

export const QuantityInput = props => (
  <Wrapper>
    <Button onClick={props.onDecrement}>-</Button>
    <Input
      type="number"
      min="1"
      max="99"
      value={props.quantity}
      onChange={props.onInputChange}
    />
    <Button onClick={props.onIncrement}>+</Button>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 20px;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
Input.displayName = "Input";

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
