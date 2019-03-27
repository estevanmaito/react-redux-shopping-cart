import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.nav`
  padding: 0.5rem;
  background-color: red;
`;

const Navbar = props => {
  const { cart } = props;
  return (
    <Wrapper>
      <p>Cart itens: {cart.map(product => product.name)}</p>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Navbar);
