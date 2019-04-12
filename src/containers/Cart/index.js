import React, { useState } from "react";
import { connect } from "react-redux";
import ReactSVG from "react-svg";
import CartList from "../CartList";

import { Wrapper, ClickableElement, CartItemCount } from "./styled";

export const getTotalItemsInCart = cart => {
  return cart.reduce((acc, i) => acc + i.quantity, 0);
};

export const Cart = props => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <Wrapper>
      <ClickableElement onClick={handleCartVisibility}>
        <ReactSVG src="assets/img/cart-icon.svg" />
      </ClickableElement>
      <CartItemCount>{getTotalItemsInCart(props.cart.items)}</CartItemCount>
      {isCartVisible && <CartList />}
    </Wrapper>
  );

  function handleCartVisibility() {
    setIsCartVisible(!isCartVisible);
  }
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
