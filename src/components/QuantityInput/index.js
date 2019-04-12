import React from "react";

import { Wrapper, Button, Quantity } from "./styled";

export const QuantityInput = props => (
  <Wrapper>
    <Button onClick={props.onDecrement}>-</Button>
    <Quantity>{props.quantity}</Quantity>
    <Button onClick={props.onIncrement}>+</Button>
  </Wrapper>
);

export default QuantityInput;
