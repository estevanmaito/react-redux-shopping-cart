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
        <Grid>
          {this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
