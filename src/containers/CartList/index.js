import React from "react";
import { connect } from "react-redux";

import CartListItem from "../../components/CartListItem";

import { Subtotal, Wrapper } from "./styled";

export const CartList = props => {
  return <Wrapper>{productList()}</Wrapper>;

  function productList() {
    if (props.cart.items.length) {
      return (
        <>
          {props.cart.items.map(i => (
            <CartListItem {...i} key={i.id} />
          ))}
          <Subtotal>Subtotal: $ {props.cart.totalPrice.toFixed(2)}</Subtotal>
        </>
      );
    }

    return <p className="empty-cart">Your cart is empty :(</p>;
  }
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(CartList);
