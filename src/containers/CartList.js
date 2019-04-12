import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CartListItem from "../components/CartListItem";

export const CartList = props => {
  let productList;
  if (props.cart.items.length) {
    productList = (
      <>
        {props.cart.items.map(i => (
          <CartListItem {...i} key={i.id} />
        ))}
        <Subtotal>Subtotal: $ {props.cart.totalPrice.toFixed(2)}</Subtotal>
      </>
    );
  } else {
    productList = <p className="empty-cart">Your cart is empty :(</p>;
  }

  return <Wrapper>{productList}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  width: 450px;
  padding: 0 10px;
  right: 10px;
  top: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 1;
`;

const Subtotal = styled.p`
  text-align: right;
`;

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(CartList);
