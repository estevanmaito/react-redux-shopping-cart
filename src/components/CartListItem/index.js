import React from "react";
import { connect } from "react-redux";

import {
  cartAddOrIncrementProduct,
  cartDecreaseProductQuantity,
  cartRemoveProduct
} from "../../redux/actions/cart.actions";

import {
  Wrapper,
  Image,
  NameWrapper,
  Name,
  RemoveButton,
  Price
} from "./styled";
import QuantityInput from "../QuantityInput";

export const CartListItem = props => {
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
      <Price>$ {props.price.toFixed(2)}</Price>
    </Wrapper>
  );

  function handleQuantityIncrement() {
    props.cartAddOrIncrementProduct(props);
  }

  function handleQuantityDecrement() {
    if (props.quantity > 1) {
      props.cartDecreaseProductQuantity(props);
    } else {
      props.cartRemoveProduct(props);
    }
  }

  function handleRemoveClick() {
    props.cartRemoveProduct(props);
  }
};

const mapDispatchToProps = {
  cartAddOrIncrementProduct,
  cartDecreaseProductQuantity,
  cartRemoveProduct
};

export default connect(
  null,
  mapDispatchToProps
)(CartListItem);
