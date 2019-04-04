import React from "react";
import styled from "styled-components";

export const CartListItem = props => (
  <Wrapper>
    <Image src={props.imgUrl} alt={props.name} />
    <Name>{props.name}</Name>
    <Quantity>- {props.quantity} +</Quantity>
    <Price>$ {props.price}</Price>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
`;

const Image = styled.img`
  width: 30px;
  height: 100%;
  margin-right: 1rem;
`;

const Name = styled.p`
  flex-grow: 3;
`;

const Price = styled.p`
  flex-basis: 70px;
`;

const Quantity = styled.p`
  text-align: center;
  flex-basis: 50px;
`;

export default CartListItem;
