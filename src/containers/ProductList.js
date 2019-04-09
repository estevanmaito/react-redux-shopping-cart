import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Product from "../components/Product";

import { fetchProducts } from "../redux/actions/products.actions";

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Wrapper>
        {this.props.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Wrapper>
    );
  }
}

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

const mapDispatchToProps = {
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
