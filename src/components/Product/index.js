import React from "react";
import { connect } from "react-redux";
import { cartAddOrIncrementProduct } from "../../redux/actions/cart.actions";

import { Wrapper, Image, Price, Name, Button, ResponsiveImage } from "./styled";

export const Product = props => {
  const { product } = props;
  return (
    <Wrapper>
      <ResponsiveImage>
        <Image src={product.imgUrl} alt={product.name} />
      </ResponsiveImage>
      <Price>${product.price}</Price>
      <Name>{product.name}</Name>
      <Button onClick={handleAddToCartClick}>add to cart</Button>
    </Wrapper>
  );

  function handleAddToCartClick() {
    props.cartAddOrIncrementProduct(product);
  }
};

const mapDispatchToProps = {
  cartAddOrIncrementProduct
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
