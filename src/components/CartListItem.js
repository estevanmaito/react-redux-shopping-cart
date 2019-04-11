import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  cartAddOrIncrementProduct,
  cartDecreaseProductQuantity,
  cartRemoveProduct
} from "../redux/actions/cart.actions";
import QuantityInput from "../components/QuantityInput";

export const CartListItem = props => {
  const handleQuantityIncrement = () => {
    props.cartAddOrIncrementProduct(props);
  };

  const handleQuantityDecrement = () => {
    if (props.quantity > 1) {
      props.cartDecreaseProductQuantity(props);
    } else {
      props.cartRemoveProduct(props);
    }
  };

  const handleRemoveClick = () => {
    props.cartRemoveProduct(props);
  };

  return (
    <Wrapper>
      <Image src={props.imgUrl} alt={props.name} />
      <NameWrapper>
        <Name>{props.name}</Name>
        <RemoveButton onClick={handleRemoveClick}>remove</RemoveButton>
      </NameWrapper>
      <QuantityInput
        onIncrement={handleQuantityIncrement}
        onDecrement={handleQuantityDecrement}
        quantity={props.quantity}
      />
      <Price>$ {props.price}</Price>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  height: 80px;
`;

const Image = styled.img`
  width: 50px;
  height: auto;
  margin-right: 1rem;
`;

const NameWrapper = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span``;

const RemoveButton = styled.span`
  font-size: 0.7rem;
  cursor: pointer;
  text-decoration: underline;
  color: #ccc;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: tomato;
  }
`;

const Price = styled.span`
  width: 60px;
  text-align: center;
`;

const mapDispatchToProps = {
  cartAddOrIncrementProduct,
  cartDecreaseProductQuantity,
  cartRemoveProduct
};

export default connect(
  null,
  mapDispatchToProps
)(CartListItem);
