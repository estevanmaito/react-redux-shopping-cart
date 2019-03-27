import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { cartAddProduct } from "../actions";

const Wrapper = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: 170px;
`;

const Price = styled.span`
  font-size: 1.5rem;
`;

const Button = styled.button``;

const Product = props => {
  const { product } = props;
  return (
    <Wrapper>
      <Image src={product.imgUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <Price>${product.price}</Price>
      <Button onClick={() => props.cartAddProduct(product)}>add to cart</Button>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  cartAddProduct
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
