import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  cartAddOrIncrementProduct,
  cartDecreaseProductQuantity,
  cartRemoveProduct
} from "../redux/actions";
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

  return (
    <Wrapper>
      <Image src={props.imgUrl} alt={props.name} />
      <Name>{props.name}</Name>
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

const mapDispatchToProps = {
  cartAddOrIncrementProduct,
  cartDecreaseProductQuantity,
  cartRemoveProduct
};

export default connect(
  null,
  mapDispatchToProps
)(CartListItem);
