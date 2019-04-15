import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "../../components/Product";

import { fetchProducts } from "../../redux/actions/products.actions";

import { Grid } from "./styled";

import { Container } from "../../components/StructureStyles/styled";

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Container>
        <Grid>
          {this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    );
  }
}

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
