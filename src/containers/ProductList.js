import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Product from "../components/Product";

export const ProductList = props => (
  <Wrapper>
    {props.products.map(product => (
      <Product key={product.name} product={product} />
    ))}
  </Wrapper>
);

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-auto-rows: 300px;
  grid-gap: 1rem;
`;

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(ProductList);
