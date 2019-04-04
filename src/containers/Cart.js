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
      <span>{getTotalItemsInCart(props.cart.items)}</span>
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

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
