import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CartListItem from "../components/CartListItem";

export const CartList = props => {
  let productList;
  if (props.cart.length) {
    productList = props.cart.map(i => <CartListItem {...i} key={i.id} />);
  } else {
    productList = <p>Your cart is empty :(</p>;
  }

  return <Wrapper>{productList}</Wrapper>;
};

const Wrapper = styled.div`
  width: 400px;
  position: absolute;
  right: 10px;
  top: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(CartList);
