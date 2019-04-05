import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactSVG from "react-svg";
import CartList from "./CartList";

export const getTotalItemsInCart = cart => {
  return cart.reduce((acc, i) => acc + i.quantity, 0);
};

export const Cart = props => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  function handleCartVisibility() {
    setIsCartVisible(!isCartVisible);
  }

  return (
    <Wrapper>
      <ClickableElement onClick={handleCartVisibility}>
        <ReactSVG src="assets/img/cart-icon.svg" />
      </ClickableElement>
      <CartItemCount>{getTotalItemsInCart(props.cart.items)}</CartItemCount>
      {isCartVisible && <CartList />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClickableElement = styled.div`
  cursor: pointer;
`;
ClickableElement.displayName = "ClickableElement";

const CartItemCount = styled.div`
  background-color: #eee;
  border-radius: 2px;
  padding: 2px;
`;
CartItemCount.displayName = "CartItemCount";

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
