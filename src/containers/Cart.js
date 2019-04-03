import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactSVG from "react-svg";

export const getTotalItemsInCart = cart => {
  return cart.reduce((acc, i) => acc + i.quantity, 0);
};

export const Cart = props => (
  <Wrapper>
    <ReactSVG src="assets/img/cart-icon.svg" />
    <span>{getTotalItemsInCart(props.cart)}</span>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Cart);
