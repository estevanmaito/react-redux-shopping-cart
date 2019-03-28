import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

export const Navbar = props => {
  const { cart } = props;
  return (
    <Wrapper>
      <p>Cart itens: {cart.map(product => product.name)}</p>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 0.5rem;
  background-color: red;
`;

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Navbar);
